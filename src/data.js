export const PROFILE = {
  name: ["ISAIAH", "THOMAS", "GALAY"],
  role: "FULL-STACK DEVELOPER",
  disciplines: "WEB · MOBILE · CLOUD SYSTEMS",
  email: "tomgalay@gmail.com",
  phone: "+63 956 831 3208",
  location: "STA. ROSA, LAGUNA · PH",
  coords: "14.3583° N — 121.1140° E",
  linkedin: "https://www.linkedin.com/in/isaiah-thomas-galay-376990175/",
  docNo: "ITG-RÉSUMÉ-0726",
  rev: "REV.E",
  status: "OPEN FOR PROJECTS",
};

export const EXPERIENCE = [
  {
    rev: "REV.F",
    role: "Mobile Developer",
    company: "Mycarehub",
    period: "NOV 2025 — PRESENT",
    span: "2025 — NOW",
    place: "REMOTE",
    current: true,
    link: "MYCAREHUB",
    summary:
      "Multiplatform mobile app for support workers — schedules, booking acceptance and shift reports, with admin management of NDIS bookings and report review on mobile.",
    points: [
      "Shipped scheduling, booking and shift-report flows for support workers and administrators",
      "Implemented background GPS tracking active during shifts — anomaly detection and on-site validation of shift timing",
    ],
    tags: ["MOBILE", "GPS TRACKING", "NDIS", "MULTIPLATFORM"],
  },
  {
    rev: "REV.E",
    role: "WordPress Developer",
    company: "Mycarehub",
    period: "NOV 2023 — PRESENT",
    span: "2023 — NOW",
    place: "REMOTE",
    current: true,
    link: "MYCAREHUB",
    summary:
      "Core business systems for an Australian NDIS service provider — intake, operations, scheduling, automations and infrastructure.",
    points: [
      "Intake & lead management: multi-step intake for participants and support workers, wired into lead conversion and referral tracking",
      "Operations: user administration, NDIS plan tracking, service agreement renewals, payments, reports, document tracking and checklists",
      "Scheduling: booking and shift modules with recurrence, calendars and location handling",
      "Automations: PDF generation for shift reports, email/push reminders, SEO",
      "DevOps: AWS EC2 production and developer instances, automated backups, upgrades and security configuration",
    ],
    tags: ["WORDPRESS", "PHP", "AWS", "AUTOMATION", "MYSQL"],
  },
  {
    rev: "REV.D",
    role: "WordPress Developer",
    company: "Freelance",
    period: "MAY 2023 — AUG 2023",
    span: "2023",
    place: "REMOTE",
    summary:
      "Matrix-based multilevel marketing system integrated with an e-commerce storefront.",
    points: [
      "Login/registration, profiles, admin and user dashboards",
      "Store management, payments, email notifications and matrix management modules",
    ],
    tags: ["E-COMMERCE", "PAYMENTS", "WORDPRESS"],
  },
  {
    rev: "REV.C",
    role: "Lead Developer",
    company: "Freelance",
    period: "MAR 2023 — APR 2023",
    span: "2023",
    place: "REMOTE",
    summary:
      "Website for an international ophthalmologist symposium — end to end, from registration to certificates.",
    points: [
      "Login/registration with doctor verification, email notifications, account management",
      "Itinerary filter, speaker gallery, certificate generator, evaluation and feedback forms, admin dashboards",
      "Maintenance, cPanel backups and email administration",
    ],
    tags: ["LEAD", "EVENT SYSTEM", "CPANEL"],
  },
  {
    rev: "REV.B",
    role: "Web Developer Intern",
    company: "Qadra Studio · JLCG",
    period: "APR 2022 — DEC 2022",
    span: "2022",
    place: "REMOTE",
    summary:
      "Responsive WordPress builds from Figma designs across two studios.",
    points: [
      "Elementor and Bricks page builds, pixel-faithful to Figma",
      "Jetpack custom post types and dynamic content",
    ],
    tags: ["WORDPRESS", "FIGMA", "ELEMENTOR", "BRICKS"],
  },
  {
    rev: "REV.A",
    role: "WordPress Developer",
    company: "Freelance",
    period: "DEC 2021 — APR 2022",
    span: "21 — 22",
    place: "REMOTE",
    summary: "WordPress page building and styling work across client tasks.",
    points: ["WordPress, CSS and Divi page builds"],
    tags: ["WORDPRESS", "CSS", "DIVI"],
  },
];

export const SKILL_GROUPS = [
  {
    id: "G-01",
    name: "Languages & Markup",
    note: "CORE BUILD MATERIALS",
    items: ["HTML", "CSS", "JS", "PHP", "MJML"],
  },
  {
    id: "G-02",
    name: "Backend & CMS",
    note: "SERVER-SIDE SYSTEMS",
    items: ["WordPress", "REST APIs", "SOAP"],
  },
  {
    id: "G-03",
    name: "Database",
    note: "RECORDS & STATE",
    items: ["MySQL"],
  },
  {
    id: "G-04",
    name: "Mobile Development",
    note: "HANDHELD SYSTEMS",
    items: ["Flutter", "iOS", "Android"],
  },
  {
    id: "G-05",
    name: "Cloud & Services",
    note: "INFRASTRUCTURE & DELIVERY",
    items: ["AWS", "GCP", "Google Apps"],
  },
];

export const STACK_LAYERS = [
  { id: "L1", name: "Infrastructure", parts: ["AWS EC2", "BACKUPS", "SECURITY"] },
  { id: "L2", name: "Data Layer", parts: ["MYSQL", "APIS", "FIREBASE"] },
  { id: "L3", name: "Operations", parts: ["INTAKE", "PLANS", "PAYMENTS", "REPORTS"] },
  { id: "L4", name: "Scheduling", parts: ["BOOKINGS", "SHIFTS", "CALENDARS"] },
  { id: "L5", name: "Mobile Edge", parts: ["GPS TRACKING", "PUSH ALERTS"] },
];

export const PROJECTS = {
  featured: [
    {
      id: "PRJ-01",
      name: "CryptSim",
      image: "/projects/CryptSim.webp",
      alt: "CryptSim trading simulator screens",
      blurb:
        "Advanced cryptocurrency trading simulator for mobile. Capstone project — won Best Research at Eureka 2022.",
      points: [
        "Built login/registration and profiles in Kotlin; contributed to the trading, transaction and backtesting modules",
        "Managed the MySQL database on Azure; wrote Node.js APIs on Microsoft serverless functions linking the cloud, mobile app and admin site",
      ],
      tags: ["ANDROID", "KOTLIN", "NODE.JS", "AZURE", "MYSQL"],
      links: [{ label: "DEMO", href: "https://www.youtube.com/watch?v=FqipOo7wO6k" }],
    },
    {
      id: "PRJ-02",
      name: "Chronicles of Elijah",
      image: "/projects/Chronicles.webp",
      alt: "Chronicles of Elijah RPG game screens",
      blurb:
        "Turn-based RPG with three levels, random monster encounters and a boss per level — built on personal time.",
      points: [
        "Classes control user and enemy entities with levels and attributes; functions drive mechanics, animations and audio",
        "XP gain, XP requirements and gold scaling follow a custom formula",
      ],
      tags: ["HTML", "CSS", "JS", "JQUERY"],
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Chronicles-of-Elijah" }],
    },
    {
      id: "PRJ-03",
      name: "Vapour.",
      image: "/projects/Vapour.webp",
      alt: "Vapour game distribution platform screens",
      blurb:
        "Video game digital distribution platform built for a Web Development subject.",
      points: [
        "Frontend: market, library and purchase modules",
        "Backend: login/registration, purchase and add-to-library flow, error validations",
      ],
      tags: ["HTML", "CSS", "PHP", "MYSQL"],
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Vapour" }],
    },
  ],
  other: [
    {
      id: "PRJ-04",
      name: "Portfolio V1",
      desc: "First portfolio site — hand-rolled animations and scroll reveals.",
      tags: ["HTML", "CSS", "JS"],
      links: [
        { label: "CODE", href: "https://github.com/TomGalay/TomGalay.github.io" },
        { label: "VIEW", href: "https://isaiahgalay.github.io/" },
      ],
    },
    {
      id: "PRJ-05",
      name: "Laragigs",
      desc: "Job listing platform with auth, CRUD listings and category filters.",
      tags: ["LARAVEL", "PHP"],
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Laragigs" }],
    },
    {
      id: "PRJ-06",
      name: "WordPress Demo",
      desc: "Custom plugin and themes — registration with profiles and an admin dashboard.",
      tags: ["WORDPRESS", "PHP"],
      links: [{ label: "CODE", href: "https://github.com/TomGalay/wordpress-demo" }],
    },
  ],
};

export const EDUCATION = {
  school: "FEU ALABANG",
  place: "MUNTINLUPA",
  degree: "BS INFORMATION TECHNOLOGY",
  spec: "SPECIALIZATION IN WEB & MOBILE APPLICATIONS",
  period: "2018 — 2022",
  honors: "summa cum laude",
  organizations: [
    { role: "INTERNAL VICE PRESIDENT", org: "JUNIOR PHILIPPINE COMPUTER SOCIETY — JPCS", span: "2018 — 2020" },
    { role: "CREATIVES MEMBER", org: "TERTIARY HONOR SOCIETY", span: "2019 — 2020" },
    { role: "MEMBER", org: "ASSOCIATION OF COMPUTING MACHINERY", span: "2018 — 2020" },
    { role: "MEMBER", org: "GOOGLE DEVELOPERS STUDENT CLUB", span: "2019 — 2020" },
  ],
};

export const AWARDS = [
  {
    title: "SUMMA CUM LAUDE",
    issuer: "FEU ALABANG",
    year: "2023",
    link: "https://www.facebook.com/FEUAlabang/photos/a.1304249696289861/5460492983998824/",
  },
  {
    title: "MOST OUTSTANDING ITE STUDENT",
    issuer: "PHILIPPINE SOCIETY OF INFORMATION TECHNOLOGY EDUCATORS — PSITE NCR",
    year: "2022",
    link: "https://www.facebook.com/FEUAlabang/posts/tamaraw-spotlight-congratulations-to-our-bsit-wma-student-isaiah-thomas-a-galay-/5346110262103764/",
  },
  {
    title: "BEST RESEARCH — EUREKA 2022",
    issuer: "FEU ALABANG · CRYPTSIM CAPSTONE",
    year: "2022",
    link: "https://www.facebook.com/Eureka2022/posts/pfbid0xSqN8hugqB3RwYx3PWAYtMVaTbBYFPnV9aTfc4MueuizXSYBC4BoTWX6fzdZ4eqnl",
  },
  {
    title: "ACADEMIC EXCELLENCE AWARD",
    issuer: "JUNIOR PHILIPPINE COMPUTER SOCIETY — JPCS",
    year: "2022",
    link: "https://www.facebook.com/FEUAlabang/photos/a.1304249696289861/5460492983998824/",
  },
];

export const COMPETITIONS = [
  {
    title: "MICROSOFT AZURE FUNDAMENTALS CHALLENGE",
    event: "MICROSOFT CLOUD SKILLS CHALLENGE · 2021",
    result: "CHAMPION",
    link: "https://www.facebook.com/FEUAlabang/posts/pfbid038M4S1smQvnA2BqsG5w5dAv4KQJPpQfymBivm8qLk244Qfn48wGYjzwZnY2kZFF6pl",
  },
  {
    title: "IDEATHON COMPETITION",
    event: "UP CURSOR COMPUTER SCIENCE SUMMIT · 2021",
    result: "CHAMPION",
    link: "https://www.facebook.com/JPCSFEUA/posts/pfbid02TbBuBbhN8o1hwFcHVpz2Rqo1UXPeEQ3vLKQuTapMFrg9oD6s5CEVtmmX8Hhheoiyl",
  },
  {
    title: "JAVA PROGRAMMING COMPETITION",
    event: "10TH IT SKILLS OLYMPICS · 2021",
    result: "CHAMPION",
    link: "https://www.facebook.com/FEUAlabang/photos/4514163658631766/",
  },
  {
    title: "YOUNG SOFTWARE ENGINEERING CODING COMPETITION",
    event: "UP LOS BAÑOS · 2021",
    result: "CHAMPION",
    link: "https://feualabang.edu.ph/features/feu-alabang-continues-to-charge-further-emerges-as-new-champions-in-local-coding-competition",
  },
];

