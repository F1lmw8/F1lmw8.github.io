// Portfolio Projects Dataset for F1lmw8

const PROJECTS_DATA = [
  {
    id: "project-pharmacy",
    title: "Multi-Language Pharmacy Label & LINE OA System",
    category: "web",
    categoryLabel: "HealthTech & Web",
    image: "assets/images/project-pharmacy.jpg",
    description: "Tri-lingual (TH/EN/ZH) smart prescription label printer with direct barcode generation, LINE OA Digital Label delivery, and PDPA-compliant patient health registry.",
    fullDescription: "A production-grade pharmacy workflow suite built for modern retail drugstores. Features real-time WYSIWYG sticker printing with Code 128 barcodes, multi-language dosage assembly (Thai, English, Chinese), automated LINE Official Account digital label dispatch via Vercel Serverless, Supabase real-time cloud syncing, SheetJS Excel master drug import, and PDPA-compliant digital consent forms.",
    tags: ["JavaScript", "LINE LIFF", "Supabase", "Vercel Serverless", "SheetJS", "LINE Messaging API", "PDPA Compliant"],
    stars: 320,
    forks: 48,
    demoUrl: "https://pharmacy-label-system.vercel.app",
    githubUrl: "https://github.com/F1lmw8/Pharmacy_Label_System"
  },
  {
    id: "project-1",
    title: "Aether AI Agent Command Center",
    category: "ai",
    categoryLabel: "AI & ML",
    image: "assets/images/project-ai-agent.png",
    description: "An autonomous multi-agent orchestration platform featuring real-time neural network graph visualizations, automated workflow execution, and interactive model monitoring.",
    fullDescription: "Aether AI Command Center provides developers with a sleek control plane for running and monitoring autonomous AI agents. Built with modern web standards, web sockets for low-latency metric streaming, and interactive node graph rendering.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "WebSockets", "TailwindCSS"],
    stars: 142,
    forks: 28,
    demoUrl: "https://github.com/F1lmw8",
    githubUrl: "https://github.com/F1lmw8"
  },
  {
    id: "project-2",
    title: "Aether Analytics SaaS Dashboard",
    category: "web",
    categoryLabel: "Web App",
    image: "assets/images/project-web-app.png",
    description: "High-performance enterprise analytics platform with real-time telemetry, customizable glassmorphism widgets, and intelligent user activity monitoring.",
    fullDescription: "Aether Analytics delivers real-time business telemetry with 60fps canvas chart rendering, custom layout builder, and end-to-end encrypted metric collection pipelines.",
    tags: ["Next.js", "Node.js", "GraphQL", "Chart.js", "PostgreSQL", "Docker"],
    stars: 215,
    forks: 45,
    demoUrl: "https://github.com/F1lmw8",
    githubUrl: "https://github.com/F1lmw8"
  },
  {
    id: "project-pos",
    title: "Point of Sale (POS) Retail Engine",
    category: "web",
    categoryLabel: "Retail POS",
    image: "assets/images/project-web-app.png",
    description: "Modern point-of-sale retail solution with fast barcode scanning, inventory management, cashier receipt printing, and daily sales ledger.",
    fullDescription: "Full-featured retail POS application designed for rapid checkout operations, product catalog management, barcode lookup, order history tracking, and offline resilience.",
    tags: ["JavaScript", "Node.js", "CSS3", "Express", "SQLite/PostgreSQL"],
    stars: 175,
    forks: 34,
    demoUrl: "https://github.com/F1lmw8/Pos_project",
    githubUrl: "https://github.com/F1lmw8/Pos_project"
  },
  {
    id: "project-3",
    title: "Nexus Mobile Crypto & Finance Suite",
    category: "mobile",
    categoryLabel: "Mobile",
    image: "assets/images/project-mobile-app.png",
    description: "Cross-platform mobile wallet and asset tracking application with real-time push notifications, biometrics security, and portfolio trend charts.",
    fullDescription: "Nexus Mobile allows users to track crypto and fiat portfolios securely on iOS and Android. Built with Flutter, featuring custom shader animations and offline-first storage engine.",
    tags: ["Flutter", "Dart", "Firebase", "Web3", "SQLite", "Tailwind"],
    stars: 98,
    forks: 19,
    demoUrl: "https://github.com/F1lmw8",
    githubUrl: "https://github.com/F1lmw8"
  },
  {
    id: "project-4",
    title: "AGY Agentic AI Framework",
    category: "open-source",
    categoryLabel: "Open Source",
    image: "assets/images/project-ai-agent.png",
    description: "Open-source Python & TypeScript SDK for constructing stateful, self-correcting agentic workflows and tool-calling pipelines.",
    fullDescription: "AGY SDK simplifies agentic AI development. Features automatic tool declaration parsing, structured JSON schema validation, persistent memory backends, and full streaming support.",
    tags: ["Python", "TypeScript", "LangChain", "OpenAI", "AsyncIO"],
    stars: 380,
    forks: 72,
    demoUrl: "https://github.com/F1lmw8",
    githubUrl: "https://github.com/F1lmw8"
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
  { name: "Git / GitHub / CI/CD", category: "tools", icon: "git-branch", level: 92 },
  { name: "Vercel / Cloud Infrastructure", category: "tools", icon: "cloud", level: 90 }
];
