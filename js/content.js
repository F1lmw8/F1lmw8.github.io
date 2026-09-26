/* ------------------------------------------------------------------ */
/*  Site content — edit this file to update text, projects, prices,    */
/*  and contacts. Every text has a Thai (th) and English (en) version. */
/* ------------------------------------------------------------------ */

const GITHUB_URL = "https://github.com/F1lmw8";

/* UI text. Keys match data-i18n="..." attributes in index.html. */
const I18N = {
  th: {
    "meta.title": "F1lmw8 | รับเขียนเว็บไซต์และพัฒนาแอปพลิเคชัน",
    "meta.desc": "รับทำเว็บไซต์ เว็บแอป และแอปมือถือ ราคาเข้าถึงได้ เริ่มต้น 5,000 บาท โดยนักพัฒนา Full-Stack นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้",
    "skip": "ข้ามไปยังเนื้อหาหลัก",
    "nav.expertise": "ความเชี่ยวชาญ",
    "nav.projects": "ผลงาน",
    "nav.pricing": "ราคา",
    "nav.about": "เกี่ยวกับ",
    "nav.contact": "ติดต่อ",
    "nav.cta": "ปรึกษาฟรี",
    "nav.menu": "เปิดเมนู",
    "lang.switch": "Switch to English",

    "hero.badge": "เปิดรับงานใหม่ · Freelance Web Developer",
    "hero.title1": "รับเขียนเว็บไซต์และ",
    "hero.title2": "พัฒนาแอปพลิเคชัน",
    "hero.lead": "บริการรับทำเว็บไซต์ครบวงจร ตอบโจทย์ธุรกิจคุณในราคาที่เข้าถึงได้ เริ่มต้นเพียง",
    "hero.price": "5,000 บาท",
    "hero.ctaPrimary": "พูดคุย/ปรึกษาโปรเจกต์",
    "hero.ctaSecondary": "ดูผลงาน",
    "hero.role": "Full-Stack Web & Mobile Developer",
    "hero.getTitle": "สิ่งที่คุณจะได้รับ",
    "hero.get1": "คุยตรงกับนักพัฒนา ไม่ผ่านคนกลาง",
    "hero.get2": "ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง",
    "hero.get3": "ดูแลหลังส่งมอบงาน",

    "expertise.eyebrow": "Tech Stack & Expertise",
    "expertise.title": "เทคโนโลยีที่ใช้พัฒนางาน",
    "expertise.desc": "เลือกใช้เครื่องมือที่ทันสมัยและเป็นมาตรฐานสากล เพื่อให้ระบบของคุณเร็ว ปลอดภัย และต่อยอดได้ในอนาคต",

    "projects.eyebrow": "Featured Projects",
    "projects.title": "ผลงานที่ผ่านมา",
    "projects.desc": "ตัวอย่างระบบที่พัฒนาจริง ตั้งแต่เว็บแอปพลิเคชันไปจนถึงแอปบนมือถือ",
    "projects.features": "ฟีเจอร์หลัก",
    "projects.tech": "เทคโนโลยีที่ใช้",
    "projects.demo": "ดูเดโม",
    "projects.source": "ซอร์สโค้ด",
    "projects.all": "ดูผลงานทั้งหมดบน GitHub",

    "pricing.eyebrow": "Pricing",
    "pricing.title": "ราคาชัดเจน เริ่มต้นได้ง่าย",
    "pricing.desc": "เหมาะสำหรับธุรกิจขนาดเล็ก ร้านค้า และผู้ที่ต้องการเริ่มมีเว็บไซต์เป็นของตัวเอง",
    "pricing.badge": "Basic Package",
    "pricing.name": "แพ็กเกจเริ่มต้น 5,000 บาท",
    "pricing.from": "เริ่มต้น",
    "pricing.cta": "เริ่มต้นโปรเจกต์",
    "pricing.note": "* ราคาอาจเปลี่ยนแปลงตามขอบเขตงาน ประเมินราคาฟรีก่อนเริ่มงาน",
    "pricing.customTitle": "ต้องการระบบที่ซับซ้อนกว่านี้?",
    "pricing.customDesc": "เว็บแอปพลิเคชัน ระบบหลังบ้าน หรือแอปมือถือ สามารถประเมินราคาตามความต้องการได้ โดยมีขั้นตอนดังนี้",

    "about.eyebrow": "About",
    "about.title": "เกี่ยวกับผม",
    "about.body": "ผมเป็นนักศึกษาสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้ ที่ชอบสร้างระบบที่ใช้งานได้จริง ตั้งแต่ระบบขายหน้าร้าน ระบบฉลากยา ไปจนถึงเกมฝึกตรรกะ และชอบเชื่อมระบบเข้ากับข้อมูลจริง บริการคลาวด์ และ AI",
    "about.t1.date": "2026",
    "about.t1.title": "โปรเจคจบ: Chalakya ระบบฉลากยาหลายภาษา",
    "about.t1.desc": "พิมพ์ฉลากยา 3 ภาษา ส่งฉลากดิจิทัลผ่าน LINE OA ใช้งานจริงที่ chalakya.in.th",
    "about.t2.date": "2025 – 2026",
    "about.t2.title": "Cloud & DevOps",
    "about.t2.desc": "Docker, microservices ด้วย FastAPI และ gRPC, deploy เว็บแอปขึ้น Render, Netlify และ Vercel",
    "about.t3.date": "2023 – ปัจจุบัน",
    "about.t3.title": "วิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้",
    "about.t3.desc": "เรียนการพัฒนาซอฟต์แวร์ เว็บ ฐานข้อมูล และคลาวด์ พร้อมทำโปรเจคเว็บจริงหลายชิ้น",

    "contact.eyebrow": "Contact",
    "contact.title": "พูดคุย/ปรึกษาโปรเจกต์",
    "contact.desc": "ทักมาได้เลยทุกช่องทาง ยินดีให้คำปรึกษาฟรี ตอบกลับภายใน 24 ชั่วโมง",
    "contact.copy": "คัดลอกอีเมล",
    "contact.copied": "คัดลอกอีเมลแล้ว",

    "footer.built": "Hosted on GitHub Pages",
  },

  en: {
    "meta.title": "F1lmw8 | Websites & App Development",
    "meta.desc": "Freelance websites, web apps, and mobile apps at an accessible price, starting from 5,000 THB. By a full-stack developer studying Computer Science at Maejo University.",
    "skip": "Skip to main content",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Free consult",
    "nav.menu": "Open menu",
    "lang.switch": "เปลี่ยนเป็นภาษาไทย",

    "hero.badge": "Open for new projects · Freelance Web Developer",
    "hero.title1": "Websites and",
    "hero.title2": "App Development",
    "hero.lead": "End-to-end website development that fits your business, at an accessible price starting from",
    "hero.price": "5,000 THB",
    "hero.ctaPrimary": "Discuss your project",
    "hero.ctaSecondary": "See my work",
    "hero.role": "Full-Stack Web & Mobile Developer",
    "hero.getTitle": "What you get",
    "hero.get1": "Talk directly to the developer, no middleman",
    "hero.get2": "Clear pricing with no hidden costs",
    "hero.get3": "Support after delivery",

    "expertise.eyebrow": "Tech Stack & Expertise",
    "expertise.title": "Technologies I build with",
    "expertise.desc": "Modern, industry-standard tools so your system is fast, secure, and ready to grow.",

    "projects.eyebrow": "Featured Projects",
    "projects.title": "Selected work",
    "projects.desc": "Real systems I have built, from web applications to mobile apps.",
    "projects.features": "Key features",
    "projects.tech": "Tech used",
    "projects.demo": "Live demo",
    "projects.source": "Source code",
    "projects.all": "See all work on GitHub",

    "pricing.eyebrow": "Pricing",
    "pricing.title": "Clear pricing, easy to start",
    "pricing.desc": "Ideal for small businesses, shops, and anyone who wants their own website.",
    "pricing.badge": "Basic Package",
    "pricing.name": "Starter package — 5,000 THB",
    "pricing.from": "from",
    "pricing.cta": "Start a project",
    "pricing.note": "* Price may vary with scope. Free estimate before any work begins.",
    "pricing.customTitle": "Need something more complex?",
    "pricing.customDesc": "Web applications, back-office systems, or mobile apps are quoted to your needs. Here is how it works:",

    "about.eyebrow": "About",
    "about.title": "About me",
    "about.body": "I am a Computer Science student at Maejo University who loves building systems people actually use — from point-of-sale and pharmacy label systems to logic games — and connecting them to real data, cloud services, and AI.",
    "about.t1.date": "2026",
    "about.t1.title": "Senior project: Chalakya multi-language pharmacy labels",
    "about.t1.desc": "Tri-lingual prescription labels with LINE OA digital delivery, live at chalakya.in.th.",
    "about.t2.date": "2025 – 2026",
    "about.t2.title": "Cloud & DevOps",
    "about.t2.desc": "Docker, microservices with FastAPI and gRPC, and deploying web apps to Render, Netlify, and Vercel.",
    "about.t3.date": "2023 – Present",
    "about.t3.title": "Computer Science, Maejo University",
    "about.t3.desc": "Studying software development, web, databases, and cloud, with many hands-on web projects.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.desc": "Reach out on any channel. Free consultation, reply within 24 hours.",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied",

    "footer.built": "Hosted on GitHub Pages",
  },
};

const TECH_STACK = [
  { name: "Next.js", category: "Frontend", badge: "N",
    desc: { th: "เว็บไซต์โหลดเร็ว รองรับ SEO ตั้งแต่ต้น", en: "Fast websites with SEO built in" } },
  { name: "TypeScript", category: "Language", badge: "TS",
    desc: { th: "โค้ดมีมาตรฐาน ลดข้อผิดพลาด ดูแลต่อได้ง่าย", en: "Consistent, safer code that is easy to maintain" } },
  { name: "React Native", category: "Mobile", badge: "RN",
    desc: { th: "แอปมือถือ iOS และ Android จากโค้ดชุดเดียว", en: "iOS and Android apps from one codebase" } },
  { name: "FastAPI", category: "Backend", badge: "API",
    desc: { th: "ระบบหลังบ้านและ API ที่รวดเร็ว ปลอดภัย", en: "Fast, secure back-end services and APIs" } },
  { name: "PostgreSQL", category: "Database", badge: "PG",
    desc: { th: "ฐานข้อมูลที่เสถียร รองรับข้อมูลเติบโต", en: "Reliable database that scales with your data" } },
  { name: "Supabase", category: "Platform", badge: "SB",
    desc: { th: "ระบบล็อกอิน ฐานข้อมูล และไฟล์ พร้อมใช้งาน", en: "Ready-made auth, database, and file storage" } },
];

/* type: "web" | "mobile" | "game" — controls the preview illustration */
const PROJECTS = [
  {
    title: "Chalakya — Multi-Language Pharmacy Label System",
    type: "web",
    badge: { th: "โปรเจคจบ", en: "Senior project" },
    desc: {
      th: "ระบบสร้างและพิมพ์ฉลากยาหลายภาษา ช่วยให้ผู้ป่วยทุกสัญชาติเข้าใจวิธีใช้ยาได้ถูกต้องและปลอดภัย",
      en: "Creates and prints multi-language medicine labels so patients of any nationality can use their medicine correctly and safely.",
    },
    highlights: {
      th: ["ฉลากยา 3 ภาษา ไทย / อังกฤษ / จีน พร้อมบาร์โค้ด", "ส่งฉลากดิจิทัลให้ผู้ป่วยผ่าน LINE OA", "ทะเบียนผู้ป่วยพร้อมใบยินยอมตาม PDPA"],
      en: ["Thai / English / Chinese labels with barcodes", "Digital labels sent to patients via LINE OA", "Patient registry with PDPA consent forms"],
    },
    tags: ["Next.js", "TypeScript", "Supabase", "LINE API"],
    url: "https://chalakya.in.th",
    urlLabel: "chalakya.in.th",
  },
  {
    title: "Pharmacy POS & Inventory System",
    type: "web",
    desc: {
      th: "ระบบขายหน้าร้านและจัดการร้านขายยาครบวงจร ตั้งแต่ขาย รับสินค้าเข้าคลัง ไปจนถึงรายงานยอดขายและภาษี",
      en: "All-in-one point of sale and pharmacy management — from checkout and goods receiving to sales and tax reports.",
    },
    highlights: {
      th: ["ขายหน้าร้าน ชำระเงินสด / PromptPay QR พร้อมใบเสร็จ", "จัดการสต็อกแยกล็อต แจ้งเตือนสินค้าใกล้หมดและใกล้หมดอายุ", "Dashboard ยอดขาย กำไร และ Import / Export Excel"],
      en: ["Checkout with cash / PromptPay QR and receipts", "Lot-based stock with low-stock and expiry alerts", "Sales & profit dashboard, Excel import / export"],
    },
    tags: ["Next.js", "PostgreSQL", "AI Chatbot"],
    url: "https://medpos-tech.vercel.app",
    repoUrl: `${GITHUB_URL}/Pos_project`,
  },
  {
    title: "Online Shop + Admin Back Office",
    type: "web",
    desc: {
      th: "เว็บร้านค้าออนไลน์พร้อมระบบหลังบ้าน เหมาะกับร้านค้าที่ต้องการขายของออนไลน์และจัดการข้อมูลเอง",
      en: "Online store with an admin back office, for shops that want to sell online and manage their own data.",
    },
    highlights: {
      th: ["ระบบสมาชิก สมัคร / ล็อกอิน / รีเซ็ตรหัสผ่าน", "เพิ่ม แก้ไข ลบ สินค้า และหน้ารายละเอียดสินค้า", "จัดการข้อมูลพนักงานผ่านหลังบ้าน"],
      en: ["Member sign-up / login / password reset", "Create, edit, delete products with detail pages", "Staff management in the back office"],
    },
    tags: ["Laravel", "React", "Inertia.js"],
    repoUrl: `${GITHUB_URL}/JanJoMinecraftShop`,
  },
  {
    title: "Task Management Web App",
    type: "web",
    desc: {
      th: "เว็บแอปจัดการงาน (CRUD) แยก Frontend / Backend ชัดเจน พร้อม Deploy ขึ้นระบบคลาวด์ใช้งานจริง",
      en: "Task management web app (CRUD) with a clean frontend / backend split, deployed to the cloud.",
    },
    highlights: {
      th: ["REST API สร้าง อ่าน แก้ไข ลบข้อมูล", "ฐานข้อมูล PostgreSQL บน Supabase ผ่าน Prisma ORM", "รองรับ Docker และ Deploy บน Netlify + Render"],
      en: ["REST API for create, read, update, delete", "PostgreSQL on Supabase via Prisma ORM", "Dockerised, deployed on Netlify + Render"],
    },
    tags: ["Vue / Quasar", "Express", "Prisma", "Supabase"],
    repoUrl: `${GITHUB_URL}/lab_4_supabase_fronted_backend`,
  },
  {
    title: "No-Code Adventure",
    type: "game",
    desc: {
      th: "เกมบนเว็บสอนตรรกะการเขียนโปรแกรมสำหรับมือใหม่ ต่อบล็อกคำสั่งเดิน เลี้ยว เงื่อนไข และลูป พาตัวละครผ่านด่านจนถึงบอส",
      en: "Browser game that teaches programming logic to beginners: stack move, turn, condition, and loop blocks to guide a character through levels up to a boss.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://no-code-adventure-game.vercel.app",
    repoUrl: `${GITHUB_URL}/No-Code-Adventure-game`,
  },
  {
    title: "FLONGF1LM Photolio",
    type: "web",
    desc: {
      th: "เว็บพอร์ตโฟลิโอภาพถ่าย มีแกลเลอรี หน้าแอดมินสำหรับอัปโหลดรูป เก็บรูปบน Cloudinary และอ่านข้อมูลกล้อง (EXIF) อัตโนมัติ",
      en: "Photography portfolio with a gallery, admin upload dashboard, Cloudinary storage, and automatic camera (EXIF) data.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"],
    repoUrl: `${GITHUB_URL}/FLONGF1LM`,
  },
  {
    title: "YG-Evo",
    type: "mobile",
    desc: {
      th: "แอปพลิเคชันมือถือที่ออกแบบให้ใช้งานง่าย ทำงานได้ลื่นไหลทั้งบน iOS และ Android",
      en: "Mobile app designed to be easy to use, running smoothly on both iOS and Android.",
    },
    tags: ["React Native", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Patient Portal System",
    type: "web",
    desc: {
      th: "พอร์ทัลสำหรับผู้ป่วย ดูนัดหมาย ประวัติการรักษา และติดต่อสถานพยาบาลได้ในที่เดียว",
      en: "Patient portal to view appointments, treatment history, and contact the clinic in one place.",
    },
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
  },
];

const PACKAGE_FEATURES = {
  th: [
    "Responsive Design — แสดงผลสวยทุกหน้าจอ",
    "Basic SEO — ตั้งค่าให้ Google ค้นเจอ",
    "Contact Form — ฟอร์มติดต่อส่งตรงถึงอีเมล",
    "สูงสุด 5 หน้า (หน้าแรก, เกี่ยวกับเรา, บริการ ฯลฯ)",
    "แก้ไขงานฟรี 2 ครั้ง",
    "ส่งมอบภายใน 7–14 วัน",
  ],
  en: [
    "Responsive design — looks great on every screen",
    "Basic SEO — set up so Google can find you",
    "Contact form — messages sent straight to your email",
    "Up to 5 pages (home, about, services, etc.)",
    "2 free revision rounds",
    "Delivered in 7–14 days",
  ],
};

const PROCESS_STEPS = [
  { title: { th: "พูดคุยความต้องการ", en: "Discuss your needs" },
    desc: { th: "เล่าไอเดียหรือปัญหาของธุรกิจคุณ ไม่มีค่าใช้จ่าย", en: "Share your idea or business problem, free of charge" } },
  { title: { th: "เสนอราคาและแผนงาน", en: "Quote and plan" },
    desc: { th: "สรุปขอบเขตงาน ราคา และระยะเวลาที่ชัดเจน", en: "Clear scope, price, and timeline" } },
  { title: { th: "พัฒนาและอัปเดตงาน", en: "Build and update" },
    desc: { th: "ส่งความคืบหน้าให้ดูเป็นระยะ ปรับแก้ได้ระหว่างทาง", en: "Regular progress updates, with changes along the way" } },
  { title: { th: "ส่งมอบและดูแลต่อ", en: "Launch and support" },
    desc: { th: "ขึ้นระบบจริง พร้อมสอนการใช้งานเบื้องต้น", en: "Go live, with a basic walkthrough of how to use it" } },
];

const EMAIL = "apichai.c.dev@gmail.com";

// TODO: replace the Facebook href with your profile URL.
const CONTACTS = [
  { label: "Facebook", value: "Filmkung", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "LINE ID", value: "apichaichomthong", href: "https://line.me/ti/p/~apichaichomthong", icon: "line" },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: "mail" },
  { label: "GitHub", value: "github.com/F1lmw8", href: GITHUB_URL, icon: "github" },
];
