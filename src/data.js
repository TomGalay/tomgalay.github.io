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
    rev: "REV.G",
    role: "Mobile Developer",
    company: "Mycarehub",
    period: "NOV 2025 — PRESENT",
    span: "Nov 2025 — Present",
    place: "NSW, Australia",
    current: true,
    link: "MYCAREHUB",
    summary:
      "I developed a multiplatform mobile app for support workers to view their schedules, accept bookings, and submit shift reports. Administrators manage bookings for support workers and NDIS participants, and review/manage submitted shift reports directly on mobile at their utmost convenience. Implemented background GPS tracking active during a shift as a safety tool, detect anomalies and help validate on-site shift details and timing.",
    points: [],
    tags: ["FLUTTER", "DART", "FIREBASE", "MESSAGING", "GPS", "ANDROID", "IOS"],
  },
  {
    rev: "REV.F",
    role: "WordPress Developer",
    company: "Mycarehub",
    period: "NOV 2023 — PRESENT",
    span: "Nov 2023 — Present",
    place: "NSW, Australia",
    current: true,
    link: "MYCAREHUB",
    summary: "I developed core business processes for an Australian NDIS Service Provider.",
    points: [
      "Intake and Lead Management: Built a multi-step intake process for participants and support workers, fully integrated with a lead conversion system for referrals and client relationship tracking.",
      "Operations: Developed an internal management system handling user administration, NDIS plan tracking, service agreement renewals, payments, reports, document tracking and checklists.",
      "Scheduling: Created booking and shift management modules with recurrence, calendars, and location.",
      "Automations and Messaging: Built automated PDF generation for shift reports, email/push notifications for reminders, and SEO.",
      "DevOps: Managed AWS server infrastructure for EC2 production and developer instances, scheduling automated backups, server upgrades, and security configurations.",
    ],
    tags: ["PHP", "REST", "MYSQL", "JAVASCRIPT", "WORDPRESS", "FIREBASE", "GOOGLE API", "MESSAGING", "GOOGLE DRIVE", "GOOGLE MAPS"],
  },
  {
    rev: "REV.E",
    role: "WordPress Developer",
    company: "Freelance",
    period: "MAY 2023 — AUG 2023",
    span: "May 2023 — Aug 2023",
    place: "REMOTE",
    summary:
      "I developed a matrix based multilevel marketing system integrated with an e-commerce storefront supported with modules such as login/registration, profiles, admin and user dashboards, store management, payments, email notifications, matrix management among others.",
    points: [],
    tags: ["JAVASCRIPT", "WORDPRESS", "PHP", "JQUERY", "REST APIS", "AJAX"],
  },
  {
    rev: "REV.D",
    role: "Lead Developer",
    company: "Freelance",
    period: "MAR 2023 — APR 2023",
    span: "Mar 2023 — Apr 2023",
    place: "REMOTE",
    summary:
      "I developed a website for an International Ophthalmologist symposium. Systems that I created include login/registration, doctor verification, email notifications, account management and profile, itinerary filter, speaker gallery, certificate generator, evaluation and feedback forms, and admin dashboards. I also maintained the website and used cPanel for backups and emails.",
    points: [],
    tags: ["JAVASCRIPT", "PHP", "JQUERY", "DASHBOARD", "MYSQL"],
  },
  {
    rev: "REV.C",
    role: "WordPress Developer Intern",
    company: "Qadra Studio · Internship",
    period: "Aug 2022 – Dec 2022",
    span: "Aug 2022 – Dec 2022",
    place: "REMOTE",
    summary:
      "Built responsive web pages for WordPress websites using Elementor or Bricks guided by Figma Designs. Jetpack was utilized for custom post types and adding dynamic content.",
    points: [],
    tags: ["WORDPRESS", "FIGMA", "ELEMENTOR", "BRICKS"],
  },
  {
    rev: "REV.B",
    role: "Web and Mobile Developer Intern",
    company: "JLCG · Internship",
    period: "Apr 2022 – Jul 2022",
    span: "Apr 2022 – Jul 2022",
    place: "REMOTE",
    summary: "Created web re-designs and concepts for an e-commerce business in WordPress",
    points: [],
    tags: ["WORDPRESS", "FIGMA", "ELEMENTOR", "BRICKS"],
  },
  {
    rev: "REV.A",
    role: "WordPress Developer",
    company: "Freelance",
    period: "Dec 2021 – Apr 2022",
    span: "Dec 2021 – Apr 2022",
    place: "REMOTE",
    summary: "I worked on different tasks mainly using WordPress, CSS, and Divi for building pages.",
    points: [],
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
      layout: "web",
      name: "WinLi Home",
      client: "STRUCTURAL ENGINEERING · ALHAMBRA, CA",
      url: "winlihome.com",
      blurb:
        "Developed and designed a website for a Structural Engineering Company in Alhambra, CA. Worked on the branding, design, and website.",
      images: [
        { src: "/projects/winli/winlihome-1.png", alt: "WinLi Home website — home page" },
        { src: "/projects/winli/winlihome-2.png", alt: "WinLi Home website — services page" },
        { src: "/projects/winli/winlihome-3.png", alt: "WinLi Home website — contact page" },
      ],
      links: [{ label: "VISIT SITE", href: "https://winlihome.com/" }],
    },
    {
      id: "PRJ-02",
      layout: "mobile",
      name: "New Life Sta Rosa",
      client: "FULL-STACK CHURCH APP · IOS · ANDROID · WEB CMS",
      blurb:
        "Worked in a team to create a full stack application for a local church. An iOS and Android mobile app was created featuring announcements, events, videos, and livestreaming for church members and guests supported with reminders, push notifications, and Firebase login. A CMS is provided to the administrators in the web.",
      images: [
        { src: "/projects/new-life-sta-rosa/newlife-1.png", alt: "New Life Sta Rosa app — splash screen" },
        { src: "/projects/new-life-sta-rosa/newlife-2.png", alt: "New Life Sta Rosa app — home feed" },
        { src: "/projects/new-life-sta-rosa/newlife-3.png", alt: "New Life Sta Rosa app — connect screen" },
        { src: "/projects/new-life-sta-rosa/newlife-4.png", alt: "New Life Sta Rosa app — events screen" },
        { src: "/projects/new-life-sta-rosa/newlife-5.png", alt: "New Life Sta Rosa app — media screen" },
        { src: "/projects/new-life-sta-rosa/newlife-6.png", alt: "New Life Sta Rosa app — profile screen" },
      ],
      links: [
        { label: "APP STORE", href: "https://apps.apple.com/ph/app/new-life-sta-rosa/id6787141995" },
        { label: "PLAY STORE", href: "#" },
      ],
    },
  ],
  archive: [
    {
      id: "PRJ-03",
      name: "CryptSim",
      image: "/projects/CryptSim.webp",
      alt: "CryptSim trading simulator screens",
      blurb:
        "Advanced cryptocurrency trading simulator for mobile. Capstone project — won Best Research at Eureka 2022.",
      links: [{ label: "DEMO", href: "https://www.youtube.com/watch?v=FqipOo7wO6k" }],
    },
    {
      id: "PRJ-04",
      name: "Chronicles of Elijah",
      image: "/projects/Chronicles.webp",
      alt: "Chronicles of Elijah RPG game screens",
      blurb:
        "Turn-based RPG with three levels, random monster encounters and a boss per level.",
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Chronicles-of-Elijah" }],
    },
    {
      id: "PRJ-05",
      name: "Vapour.",
      image: "/projects/Vapour.webp",
      alt: "Vapour game distribution platform screens",
      blurb:
        "Video game digital distribution platform built for a Web Development course.",
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Vapour" }],
    },
  ],
  other: [
    {
      id: "PRJ-06",
      name: "Portfolio V1",
      desc: "First portfolio site — hand-rolled animations and scroll reveals.",
      links: [
        { label: "CODE", href: "https://github.com/TomGalay/TomGalay.github.io" },
        { label: "VIEW", href: "https://isaiahgalay.github.io/" },
      ],
    },
    {
      id: "PRJ-07",
      name: "Laragigs",
      desc: "Job listing platform with auth, CRUD listings and category filters.",
      links: [{ label: "CODE", href: "https://github.com/TomGalay/Laragigs" }],
    },
    {
      id: "PRJ-08",
      name: "WordPress Demo",
      desc: "Custom plugin and themes — registration with profiles and an admin dashboard.",
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
    link: "https://www.facebook.com/photo/?fbid=608447027958485&set=a.482462397223616",
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

