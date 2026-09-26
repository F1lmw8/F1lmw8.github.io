/* Rendering + Thai/English switching. Content lives in js/content.js. */

const ICONS = {
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  game: '<rect x="2.5" y="7" width="19" height="10" rx="4"/><path d="M7 10.5v3M5.5 12h3M15.5 11h.01M18 13h.01"/>',
  facebook: '<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3.5h2V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/>',
  line: '<path d="M12 4c-4.97 0-9 3.13-9 7 0 3.47 3.24 6.37 7.6 6.92.3.07.7.2.8.45.1.23.06.58.03.81l-.13.78c-.04.23-.19.9.8.49 1-.41 5.33-3.14 7.28-5.37C20.67 13.6 21 12.35 21 11c0-3.87-4.03-7-9-7Z"/><path d="M8 9.5v3h1.6M11 9.5v3M13 12.5v-3l2 3v-3M18 9.5h-1.6v3H18M16.4 11H18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
};

const TYPE_LABEL = {
  web: { icon: "globe", label: "Web Application" },
  mobile: { icon: "phone", label: "Mobile Application" },
  game: { icon: "game", label: "Web Game" },
};

const icon = (name, cls = "icon") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

let lang = "th";
const t = (key) => I18N[lang][key] ?? I18N.th[key] ?? key;
const pick = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.th : v);

/* ---------- Language ---------- */

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "th" || fromUrl === "en") return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "th" || saved === "en") return saved;
  } catch (_) { /* storage unavailable */ }
  return "th"; // Thai first
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    el.setAttribute(attr, t(key));
  });
  document.querySelectorAll(".lang-toggle [data-lang]").forEach((el) => {
    el.classList.toggle("active", el.dataset.lang === lang);
  });

  renderAll();
}

/* ---------- Sections ---------- */

function renderTech() {
  document.getElementById("tech-list").innerHTML = TECH_STACK.map((s) => `
    <li class="card tech-card">
      <span class="tech-badge">${escapeHtml(s.badge)}</span>
      <div>
        <div class="tech-head"><h3>${escapeHtml(s.name)}</h3><span>${escapeHtml(s.category)}</span></div>
        <p>${escapeHtml(pick(s.desc))}</p>
      </div>
    </li>`).join("");
}

function projectPreview(type) {
  if (type === "mobile") {
    return `<div class="preview"><div class="mock-phone"><div class="mock-notch"></div><div class="mock-block"></div><div class="mock-line w-75"></div><div class="mock-line w-50"></div></div></div>`;
  }
  if (type === "game") {
    const colors = ["#ff7043", "#26c6da", "#ffca28", "#66bb6a", "#26c6da", "#ab47bc", "#ff7043", "#66bb6a"];
    return `<div class="preview"><div class="mock-blocks">${colors.map((c) => `<span style="background:${c}"></span>`).join("")}</div></div>`;
  }
  return `<div class="preview"><div class="mock-browser"><div class="mock-bar"><span></span><span></span><span></span></div><div class="mock-body"><div><div class="mock-line"></div><div class="mock-line"></div><div class="mock-line w-66"></div></div><div><div class="mock-block"></div><div class="mock-line w-75"></div></div></div></div></div>`;
}

function renderProjects() {
  document.getElementById("project-list").innerHTML = PROJECTS.map((p) => {
    const type = TYPE_LABEL[p.type] || TYPE_LABEL.web;
    const highlights = pick(p.highlights);
    const links = [];
    if (p.url) {
      links.push(`<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="link-primary">${escapeHtml(p.urlLabel || t("projects.demo"))}${icon("arrowUpRight", "icon icon-sm")}</a>`);
    }
    if (p.repoUrl) {
      links.push(`<a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer" class="link-muted">${icon("github", "icon icon-sm")}${t("projects.source")}</a>`);
    }
    return `
    <article class="card project-card">
      ${projectPreview(p.type)}
      <div class="project-body">
        <p class="project-type">${icon(type.icon, "icon icon-sm")}${type.label}${p.badge ? `<span class="project-badge">${escapeHtml(pick(p.badge))}</span>` : ""}</p>
        <h3>${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(pick(p.desc))}</p>
        ${highlights ? `<ul class="project-highlights" aria-label="${escapeHtml(t("projects.features"))}">${highlights.map((h) => `<li>${icon("check", "icon icon-sm")}${escapeHtml(h)}</li>`).join("")}</ul>` : ""}
        <div class="grow"></div>
        <ul class="tags" aria-label="${escapeHtml(t("projects.tech"))}">${p.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
        ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
      </div>
    </article>`;
  }).join("");
}

function renderPricing() {
  document.getElementById("package-list").innerHTML = pick(PACKAGE_FEATURES).map((f) => `
    <li><span class="check-dot">${icon("check", "icon icon-xs")}</span><span>${escapeHtml(f)}</span></li>`).join("");

  document.getElementById("process-list").innerHTML = PROCESS_STEPS.map((s, i) => `
    <li><span class="step-num">${i + 1}</span><div><p class="step-title">${escapeHtml(pick(s.title))}</p><p class="step-desc">${escapeHtml(pick(s.desc))}</p></div></li>`).join("");
}

function renderContacts() {
  document.getElementById("contact-list").innerHTML = CONTACTS.map((c) => {
    const external = !c.href.startsWith("mailto:");
    return `
    <li>
      <a href="${escapeHtml(c.href)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""} class="card contact-card">
        <span class="contact-icon">${icon(c.icon, "icon icon-lg")}</span>
        <span class="contact-text"><span class="contact-label">${escapeHtml(c.label)}</span><span class="contact-value">${escapeHtml(c.value)}</span></span>
        ${icon("arrowUpRight", "icon contact-arrow")}
      </a>
    </li>`;
  }).join("");
}

function renderAll() {
  renderTech();
  renderProjects();
  renderPricing();
  renderContacts();
}

/* ---------- Interactions ---------- */

let toastTimer;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = lang === "th" ? "en" : "th";
  try { localStorage.setItem("lang", next); } catch (_) { /* storage unavailable */ }
  applyLang(next);
});

document.getElementById("copy-email").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast(t("contact.copied"));
  } catch (_) {
    location.href = `mailto:${EMAIL}`;
  }
});

// Close the mobile menu after choosing a link
document.querySelectorAll(".nav-mobile a").forEach((a) =>
  a.addEventListener("click", () => a.closest("details").removeAttribute("open")),
);

document.getElementById("year").textContent = new Date().getFullYear();
applyLang(detectLang());
