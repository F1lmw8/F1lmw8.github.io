// Portfolio Projects Dataset for F1lmw8

const PROJECTS_DATA = [
  {
    id: "project-pharmacy",
    title: "Chalakya — Pharmacy Label & LINE OA System",
    category: "web",
    categoryLabel: "Senior Project",
    image: "assets/images/project-pharmacy.jpg",
    description: "Tri-lingual (TH/EN/ZH) smart prescription label printer with direct barcode generation, LINE OA Digital Label delivery, and PDPA-compliant patient health registry.",
    fullDescription: "My senior (capstone) project at Maejo University, live at chalakya.in.th. A pharmacy workflow suite built for retail drugstores. Features WYSIWYG sticker printing with Code 128 barcodes, multi-language dosage assembly (Thai, English, Chinese), LINE Official Account digital label dispatch via Vercel Serverless, Supabase cloud syncing, SheetJS Excel master drug import, and PDPA-compliant digital consent forms.",
    tags: ["JavaScript", "LINE LIFF", "Supabase", "Vercel Serverless", "SheetJS", "LINE Messaging API"],
    year: "2026",
    demoUrl: "https://chalakya.in.th"
  },
  {
    id: "project-rdu-pos",
    title: "RDU Pharmacy POS & AI Clinical Agent (Prototype)",
    category: "ai",
    categoryLabel: "AI & HealthTech",
    image: "assets/images/covers/rdu-pos.svg",
    description: "Pharmacy point-of-sale with Rational Drug Use (RDU) lookup, stock & sales dashboards, PromptPay QR checkout, and a tool-calling AI agent grounded on RxNorm and openFDA.",
    fullDescription: "The first prototype of my senior project — about 40–50% of a full pharmacy POS was built before the project pivoted to the Pharmacy Label System (Chalakya), but the completed features are fully working. A Next.js 15 App Router system for Thai drugstores. Pharmacists can search drugs by Thai or English name (Thai phonetic mapper), view RDU details and leaflets, sell with PromptPay QR payment, and manage lot-based stock, stock-in, and sales logs with Recharts dashboards backed by PostgreSQL, plus GPP reports (ข.ย. 9/10/11), patient allergy alerts, FDA product lookup, Goods Receipt Notes, and VAT / Section 86 tax invoices with Excel export. A built-in AI assistant (Vercel AI SDK + Gemini) calls RxNorm and openFDA tools and answers only from official FDA data, with a zero-hallucination guardrail.",
    tags: ["Next.js 15", "React 19", "PostgreSQL", "Vercel AI SDK", "Gemini", "openFDA", "Recharts", "PromptPay QR"],
    year: "2026",
    githubUrl: "https://github.com/F1lmw8/Pos_project"
  },
  {
    id: "project-nocode-adventure",
    title: "No-Code Adventure — Logic Puzzle Game",
    category: "game",
    categoryLabel: "EdTech Game",
    image: "assets/images/covers/nocode.svg",
    description: "Browser game that teaches programming logic to beginners: stack Move, Turn, Condition, and Loop blocks to guide a character through grid levels up to a boss stage.",
    fullDescription: "A single-file, dependency-free HTML/CSS/JavaScript game designed for beginners learning to think like programmers. Players build a program from colour-coded command blocks (move, turn, if-conditions, loops), run it, and watch the character execute step by step on a grid map. Levels ramp up in difficulty and finish with a boss stage, with star ratings for efficient solutions. Deployed on Vercel.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Game Design", "Vercel"],
    year: "2026",
    demoUrl: "https://no-code-adventure-game.vercel.app",
    githubUrl: "https://github.com/F1lmw8/No-Code-Adventure-game"
  },
  {
    id: "project-photolio",
    title: "FLONGF1LM Photolio",
    category: "web",
    categoryLabel: "Web App",
    image: "assets/images/covers/photolio.svg",
    description: "Personal photography portfolio with a lightbox gallery, admin upload dashboard, Cloudinary image storage, and automatic EXIF extraction.",
    fullDescription: "A Next.js App Router + TypeScript + TailwindCSS photo portfolio. Includes a public gallery with lightbox viewing, anti-copy overlay and watermark options, plus a protected admin area (login middleware) for uploading, managing, and deleting photos. Images are stored on Cloudinary, metadata in PostgreSQL, and EXIF camera data is read automatically on upload.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Cloudinary", "EXIF"],
    year: "2025",
    githubUrl: "https://github.com/F1lmw8/FLONGF1LM"
  },
  {
    id: "project-grpc-movies",
    title: "Movie Microservices with gRPC",
    category: "devops",
    categoryLabel: "Backend & DevOps",
    image: "assets/images/covers/grpc.svg",
    description: "Three Python microservices communicating over gRPC and exposed via FastAPI REST endpoints, all orchestrated with Docker Compose.",
    fullDescription: "A cloud engineering project that demonstrates inter-service communication. Service A is a gRPC server acting as the movie data source; Services B and C are FastAPI apps that fetch data from A over gRPC and expose REST endpoints. The design maps OOP ideas onto microservices — inheritance (shared data from A) and polymorphism (same /my-movie endpoint, different results per service). Everything is containerised and started with docker compose.",
    tags: ["Python", "FastAPI", "gRPC", "Protocol Buffers", "Docker Compose", "Microservices"],
    year: "2026",
    githubUrl: "https://github.com/F1lmw8/project_Apichai_397"
  },
  {
    id: "project-cloud-deploy",
    title: "Full-Stack Task App — Cloud Deployment",
    category: "devops",
    categoryLabel: "Full-Stack & Cloud",
    image: "assets/images/covers/cloud-deploy.svg",
    description: "Task manager built with Express + Prisma + Supabase and a Quasar/Vue frontend, Dockerised and deployed to Render (API) and Netlify (SPA).",
    fullDescription: "An end-to-end full-stack deployment project. The backend is an Express.js REST API (CORS, Helmet, Morgan) using Prisma ORM with a Supabase PostgreSQL database; the frontend is a Quasar (Vue 3 Composition API) SPA with Thai date formatting. Both have Dockerfiles, and the frontend ships with an nginx config. The API runs on Render and the SPA on Netlify.",
    tags: ["Express", "Prisma", "Supabase", "Quasar", "Vue 3", "Docker", "Render", "Netlify"],
    year: "2026",
    demoUrl: "https://apichai-chomthong-66397-06-04-2026.netlify.app",
    githubUrl: "https://github.com/F1lmw8/Apichai_Chomthong__6639706_04_2026"
  }
];

const SKILLS_DATA = [
  { name: "JavaScript / TypeScript", category: "frontend", icon: "code-2", level: 95 },
  { name: "React / Next.js", category: "frontend", icon: "atom", level: 90 },
  { name: "HTML5 / CSS3 / Glassmorphism", category: "frontend", icon: "layout", level: 95 },
  { name: "LINE LIFF & Messaging API", category: "frontend", icon: "message-square", level: 92 },
  { name: "Node.js / Express / Python", category: "backend", icon: "server", level: 88 },
  { name: "FastAPI / REST / GraphQL", category: "backend", icon: "database", level: 85 },
  { name: "Supabase / PostgreSQL / Redis", category: "backend", icon: "hard-drive", level: 88 },
  { name: "LLMs / Agentic AI Systems", category: "ai", icon: "brain", level: 88 },
  { name: "Docker / Docker Compose / gRPC", category: "tools", icon: "container", level: 85 },
  { name: "Vue 3 / Quasar", category: "frontend", icon: "layout-template", level: 85 },
  { name: "Git / GitHub / CI/CD", category: "tools", icon: "git-branch", level: 92 },
  { name: "Vercel / Cloud Infrastructure", category: "tools", icon: "cloud", level: 90 }
];
