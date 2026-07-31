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
    span: "2023 — 25",
    place: "REMOTE",
    current: true,
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
    name: "Languages",
    note: "CORE BUILD MATERIALS",
    items: ["JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    id: "G-02",
    name: "Frameworks & Libraries",
    note: "STRUCTURAL TOOLING",
    items: ["Vue.js", "Bootstrap"],
  },
  {
    id: "G-03",
    name: "Platforms & Integration",
    note: "WHERE SYSTEMS LIVE",
    items: ["WordPress", "REST APIs"],
  },
  {
    id: "G-04",
    name: "Data & Storage",
    note: "RECORDS & STATE",
    items: ["MySQL", "Firebase"],
  },
  {
    id: "G-05",
    name: "Cloud & DevOps",
    note: "INFRASTRUCTURE & DELIVERY",
    items: ["AWS", "GCP", "Azure"],
  },
];

export const STACK_LAYERS = [
  { id: "L1", name: "Infrastructure", parts: ["AWS EC2", "BACKUPS", "SECURITY"] },
  { id: "L2", name: "Data Layer", parts: ["MYSQL", "APIS", "FIREBASE"] },
  { id: "L3", name: "Operations", parts: ["INTAKE", "PLANS", "PAYMENTS", "REPORTS"] },
  { id: "L4", name: "Scheduling", parts: ["BOOKINGS", "SHIFTS", "CALENDARS"] },
  { id: "L5", name: "Mobile Edge", parts: ["GPS TRACKING", "PUSH ALERTS"] },
];

export const STACK_CALLOUTS = [
  { id: "c1", text: "GPS PING — 14.3583°N 121.1140°E" },
  { id: "c2", text: "SHIFT REPORT → AUTO PDF" },
  { id: "c3", text: "EC2 PROD + DEV INSTANCES" },
];

export const EDUCATION = {
  school: "FEU ALABANG",
  place: "MUNTINLUPA",
  degree: "BS INFORMATION TECHNOLOGY",
  spec: "SPECIALIZATION IN WEB & MOBILE APPLICATIONS",
  period: "2018 — 2022",
  notes: [
    "Graduated SUMMA CUM LAUDE",
    "Internal Vice President, Junior Philippine Computer Society (JPCS)",
    "Competed in multiple programming competitions",
  ],
};

export const AWARDS = [
  {
    title: "MOST OUTSTANDING ITE STUDENT",
    issuer: "PHILIPPINE SOCIETY OF INFORMATION TECHNOLOGY EDUCATORS — PSITE",
    year: "2022",
  },
  {
    title: "ACADEMIC EXCELLENCE AWARD",
    issuer: "JUNIOR PHILIPPINE COMPUTER SOCIETY — JPCS",
    year: "2022",
  },
];

