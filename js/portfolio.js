// ==========================================================================
// F1LMW8 DEVELOPER PORTFOLIO (portfolio.html)
// Content: js/portfolio-data.js · shared contacts: js/content.js
// ==========================================================================

let lang = 'th';
const t = (key) => PORTFOLIO_I18N[lang][key] ?? PORTFOLIO_I18N.th[key] ?? key;
const pick = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.th : v);
let currentSkillFilter = 'all';
let currentProjectFilter = 'all';

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl === 'th' || fromUrl === 'en') return fromUrl;
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'th' || saved === 'en') return saved;
  } catch (_) { /* storage unavailable */ }
  return 'th';
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').setAttribute('content', t('meta.desc'));
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    el.setAttribute(attr, t(key));
  });
  document.querySelectorAll('.lang-toggle [data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  renderSkills(currentSkillFilter);
  renderProjects(currentProjectFilter);
}

function initLangToggle() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    const next = lang === 'th' ? 'en' : 'th';
    try { localStorage.setItem('lang', next); } catch (_) { /* storage unavailable */ }
    applyLang(next);
    playSound(620, 0.05);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  lang = detectLang();
  document.getElementById('year').textContent = new Date().getFullYear();
  const emailLink = document.getElementById('contact-email');
  emailLink.textContent = EMAIL;
  emailLink.href = `mailto:${EMAIL}`;
  initLangToggle();
  initParticleCanvas();
  initCustomCursor();
  initNavbarAndScroll();
  initTypingEffect();
  initThemeToggle();
  applyLang(lang);
  initSkillsObserver();
  initTerminalModal();
  initContactForm();
});

/* ==========================================================================
   PARTICLE CONSTELLATION CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = Math.min(width < 768 ? 35 : 75, 100);

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction / bounce
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }
    }

    draw() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(0, 242, 254, 0.7)' : 'rgba(0, 162, 255, 0.7)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const lineColor = isDark ? 'rgba(0, 242, 254, ' : 'rgba(0, 120, 255, ';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `${lineColor}${0.25 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const dot = document.querySelector('.custom-cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function render() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
    requestAnimationFrame(render);
  }
  render();

  // Hover scale on interactive elements
  const hoverables = document.querySelectorAll('a, button, input, textarea, .filter-btn, .project-card, .skill-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.borderColor = 'var(--accent-pink)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.borderColor = 'var(--accent-cyan)';
    });
  });
}

/* ==========================================================================
   NAVBAR & SCROLL PROGRESS
   ========================================================================== */
function initNavbarAndScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollProgress = document.querySelector('.scroll-progress');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (scrollProgress) scrollProgress.style.width = `${progress}%`;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Nav Link Highlight
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollTop >= top && scrollTop < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      playSound(600, 0.05);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   TYPING ANIMATION
   ========================================================================== */
function initTypingEffect() {
  const target = document.querySelector('.typing-target');
  if (!target) return;

  let words = TYPING_WORDS[lang];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (words !== TYPING_WORDS[lang]) { words = TYPING_WORDS[lang]; wordIndex = 0; charIndex = 0; isDeleting = false; }
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }
  type();
}

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('f1lmw8-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('f1lmw8-theme', newTheme);
    updateThemeIcon(newTheme);
    playSound(newTheme === 'dark' ? 440 : 880, 0.1);
    showToast(t('toast.theme'), 'info');
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  if (theme === 'light') {
    icon.setAttribute('data-lucide', 'sun');
  } else {
    icon.setAttribute('data-lucide', 'moon');
  }
  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   SKILLS & PROJECTS RENDER
   ========================================================================== */
function renderSkills(categoryFilter = 'all') {
  currentSkillFilter = categoryFilter;
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = categoryFilter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === categoryFilter);

  filtered.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <div class="skill-header">
        <div class="skill-icon-box">
          <i data-lucide="${skill.icon}"></i>
        </div>
        <div class="skill-title">${skill.name}</div>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted);">
        <span>${t('skills.level')}</span>
        <span style="font-weight:700; color:var(--accent-cyan);">${skill.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-level="${skill.level}"></div>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
  animateSkillBars();
}

function initSkillsObserver() {
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-filter');
      renderSkills(cat);
      playSound(520, 0.05);
    });
  });
}

function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    setTimeout(() => {
      bar.style.width = `${level}%`;
    }, 100);
  });
}

function renderProjects(categoryFilter = 'all') {
  currentProjectFilter = categoryFilter;
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = categoryFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === categoryFilter);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" />
        <span class="project-badge">${pick(project.categoryLabel)}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${pick(project.description)}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <button class="project-btn btn-secondary" onclick="openProjectModal('${project.id}')">
            <i data-lucide="info"></i> ${t('projects.details')}
          </button>
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-btn btn-primary">
            <i data-lucide="github"></i> ${t('projects.code')}
          </a>` : project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener" class="project-btn btn-primary">
            <i data-lucide="external-link"></i> ${t('projects.visit')}
          </a>` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();

  // Filter Buttons binding
  const projectFilterBtns = document.querySelectorAll('.projects-filter .filter-btn');
  projectFilterBtns.forEach(btn => {
    btn.onclick = (e) => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderProjects(e.currentTarget.getAttribute('data-filter'));
      playSound(580, 0.05);
    };
  });
}

/* Modal View */
window.openProjectModal = function(id) {
  const project = PROJECTS_DATA.find(p => p.id === id);
  if (!project) return;

  const overlay = document.getElementById('modal-overlay');
  const box = document.getElementById('modal-box');
  if (!overlay || !box) return;

  box.innerHTML = `
    <button class="icon-btn modal-close-btn" onclick="closeModal()">
      <i data-lucide="x"></i>
    </button>
    <img src="${project.image}" alt="${project.title}" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.25rem;" />
    <span class="project-badge" style="position:static; display:inline-block; margin-bottom:0.75rem;">${pick(project.categoryLabel)}</span>
    <h2 style="font-size:1.75rem; font-weight:800; margin-bottom:0.75rem;">${project.title}</h2>
    <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.5rem;">${pick(project.fullDescription)}</p>
    <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem; color:var(--text-muted); font-family:var(--font-mono); font-size:0.9rem;">
      <span>📅 ${project.year}</span>
      <span>${project.demoUrl ? t('projects.live') : project.githubUrl ? t('projects.sourceOnly') : t('projects.private')}</span>
    </div>
    <div class="project-tags" style="margin-bottom:1.5rem;">
      ${project.tags.map(t => `<span class="project-tag" style="font-size:0.85rem; padding:0.3rem 0.7rem;">${t}</span>`).join('')}
    </div>
    <div style="display:flex; gap:1rem;">
      ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="flex:1; justify-content:center;">
        <i data-lucide="external-link"></i> ${t('projects.demo')}
      </a>` : ''}
      ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="flex:1; justify-content:center;">
        <i data-lucide="github"></i> ${t('projects.source')}
      </a>` : ''}
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
  playSound(700, 0.1);
};

window.closeModal = function() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
};

/* ==========================================================================
   DEVELOPER CLI TERMINAL
   ========================================================================== */
function initTerminalModal() {
  const toggleBtn = document.getElementById('terminal-toggle');
  const modal = document.getElementById('terminal-modal');
  const closeBtn = document.getElementById('terminal-close');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (!toggleBtn || !modal || !input) return;

  toggleBtn.addEventListener('click', () => {
    modal.classList.add('active');
    input.focus();
    playSound(800, 0.08);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';
      executeCommand(cmd, output);
      playSound(650, 0.04);
    }
  });
}

function executeCommand(cmd, output) {
  const line = document.createElement('div');
  line.style.marginBottom = '0.5rem';

  const userPrompt = `<span style="color:#58a6ff;">guest@f1lmw8</span>:<span style="color:#79c0ff;">~</span>$ <span style="color:#00f2fe;">${cmd.replace(/[&<>"']/g, '')}</span><br/>`;

  let response = '';

  switch (cmd) {
    case 'help':
      response = `
Available commands:<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">about</span>&nbsp;&nbsp;&nbsp;&nbsp;- Print developer bio overview<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;- List top technical skills<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">projects</span>&nbsp;&nbsp;- List featured projects<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">contact</span>&nbsp;&nbsp;&nbsp;- Display contact info & GitHub profile<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">matrix</span>&nbsp;&nbsp;&nbsp;&nbsp;- Toggle matrix digital rain effect<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">theme</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Toggle dark/light theme<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear terminal screen<br/>
&nbsp;&nbsp;<span style="color:#f59e0b;">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close terminal window
      `;
      break;
    case 'about':
      response = `<span style="color:#10b981;">F1lmw8</span> - Computer Science student at Maejo University. Senior project: <a href="https://chalakya.in.th" target="_blank" style="color:#00f2fe;">chalakya.in.th</a>`;
      break;
    case 'skills':
      response = `Top Stack: Next.js, React, Vue/Quasar, JavaScript, Python, FastAPI, Express, PostgreSQL, Supabase, Docker, Gemini AI`;
      break;
    case 'projects':
      response = PROJECTS_DATA.map(p => `• <span style="color:#00f2fe;">${p.title}</span> (${pick(p.categoryLabel)})`).join('<br/>');
      break;
    case 'contact':
      response = `GitHub: <a href="https://github.com/F1lmw8" target="_blank" style="color:#00f2fe;">github.com/F1lmw8</a><br/>Email: ${EMAIL}`;
      break;
    case 'theme':
      document.getElementById('theme-toggle').click();
      response = `Theme toggled successfully!`;
      break;
    case 'matrix':
      toggleMatrixEffect();
      response = `Matrix Digital Rain toggled!`;
      break;
    case 'clear':
      output.innerHTML = '';
      return;
    case 'exit':
      document.getElementById('terminal-modal').classList.remove('active');
      return;
    default:
      if (cmd === '') return;
      response = `<span style="color:#ff5f56;">Command not found: ${cmd.replace(/[&<>"']/g, '')}</span>. Type '<span style="color:#f59e0b;">help</span>' for available commands.`;
  }

  line.innerHTML = userPrompt + response;
  output.appendChild(line);
  output.parentElement.scrollTop = output.parentElement.scrollHeight;
}

let matrixActive = false;
function toggleMatrixEffect() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  matrixActive = !matrixActive;
  if (matrixActive) {
    canvas.classList.add('active');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const chars = '0123456789ABCDEFJAVAJSDEVAI';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
      if (!matrixActive) return;
      ctx.fillStyle = 'rgba(13, 17, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00f2fe';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      setTimeout(drawMatrix, 50);
    }
    drawMatrix();
  } else {
    canvas.classList.remove('active');
  }
}

/* ==========================================================================
   CONTACT FORM & TOAST ALERTS
   ========================================================================== */
function initContactForm() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        showToast(t('contact.copied'), 'success');
        playSound(750, 0.08);
      } catch (_) {
        location.href = `mailto:${EMAIL}`;
      }
    });
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="check-circle" class="toast-icon"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  if (window.lucide) lucide.createIcons();

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* Web Audio API Sound Synthesizer */
function playSound(freq = 440, duration = 0.05) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    // Ignore audio context autoplay restrictions
  }
}
