export const personalInfo = {
  name: "Tushar Ambastha",
  role: "Computer Science Undergraduate",
  tagline: "Building practical software development skills through Java, problem-solving, and web development.",
  college: "Oriental Institute of Science & Technology, Bhopal",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: 2028,
  email: "ambasthatushar@gmail.com",
  github: "https://github.com/tusharambastha",
  linkedin: "https://www.linkedin.com/in/tushar-ambastha-909019330/",
  status: "Undergraduate Student · Class of 2028",
  location: "Bhopal, India",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const aboutData = {
  content:
    "I'm a Computer Science undergraduate at OIST Bhopal, focused on Java, problem-solving, and building practical software projects. I believe in learning by building, improving through iteration, and writing code that solves real problems.",
};

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Core languages used for problem solving, application logic, and systems.",
    skills: [
      { name: "Java", context: "Primary language for OOP, data structures, and Spring Boot backend development" },
      { name: "JavaScript", context: "Modern ES6+ for frontend interactions, React components, and browser APIs" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Building clean, accessible, and responsive user experiences.",
    skills: [
      { name: "React", context: "Component architecture, hooks, state management, and SPA navigation" },
      { name: "HTML5 & CSS3", context: "Semantic markup, modern layout (Flexbox/Grid), and responsive design" },
      { name: "Vite", context: "Fast development tooling, asset optimization, and production bundling" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Developing web services, API endpoints, and server-side logic.",
    skills: [
      { name: "Spring Boot", context: "Java-based REST API development and backend routing (used in SchemeSathi)" },
      { name: "REST APIs", context: "HTTP request/response contracts, JSON serialization, and error handling" },
      { name: "FastAPI", context: "Python microservices and retrieval endpoints (explored in ManakSetu)" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Data persistence, schema design, and client-side caching.",
    skills: [
      { name: "SQL", context: "Relational queries, joins, constraints, and index fundamentals" },
      { name: "PostgreSQL & pgvector", context: "Relational modeling and vector similarity extension" },
      { name: "MySQL", context: "Relational database operations and basic schema modeling" },
      { name: "Supabase", context: "Cloud database and auth integration (implemented in SurakshaAR)" },
      { name: "IndexedDB", context: "Browser-native offline data persistence and synchronization" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Foundational concepts for engineering reliable software.",
    skills: [
      { name: "Data Structures & Algorithms", context: "Arrays, lists, hash maps, trees, sorting, and algorithmic complexity" },
      { name: "Object-Oriented Programming", context: "Encapsulation, inheritance, polymorphism, and interface-driven design" },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Daily development environment, version control, and builds.",
    skills: [
      { name: "Git & GitHub", context: "Branching, commits, pull requests, and repository management" },
      { name: "VS Code & IntelliJ IDEA", context: "Daily IDEs for web and Java development" },
      { name: "Maven", context: "Java dependency management and build automation" },
    ],
  },
];

export const projects = [
  {
    id: "suraksha-ar",
    name: "SurakshaAR",
    tagline: "AR & 3D Vocational Safety Training Simulator for Industrial & Mining Workers",
    badge: "Smart India Hackathon 2026",
    badgeDetail: "Problem Statement SIH26041",
    category: "hackathon",
    problem:
      "Industrial workers and trainees in mining and manufacturing sectors face severe hazards, yet physical emergency drills carry heavy logistical costs and genuine safety risks, while classroom instruction fails to build situational muscle memory.",
    solution:
      "Built a mobile-first, zero-headset training simulator using live camera WebRTC feeds and Three.js 3D environments, enabling realistic hazard response drills directly on standard Android smartphones.",
    highlights: [
      "Dual-mode simulation: Live camera AR mode with device orientation/gyro tracking, plus 360° interactive 3D simulation using OrbitControls.",
      "Simulated hazard response drills for manufacturing fire alarms, CO2 extinguisher selection, and mining gas leak evacuation protocols.",
      "Trilingual accessibility supporting English, Hindi, and Santali (Ol Chiki script) with integrated Web Speech text-to-speech for low-literacy workers.",
      "Cryptographic SHA-256 certificate hashing via browser Web Crypto API with public QR code validation to prevent credential tampering.",
      "Offline-first architecture powered by IndexedDB to allow uninterrupted training in low-connectivity underground mines.",
    ],
    technologies: ["React 18", "Vite", "Three.js", "Supabase", "IndexedDB", "WebRTC", "Web Crypto API"],
    githubUrl: "https://github.com/tusharambastha/SurakshaAR",
    liveUrl: "https://tusharambastha.github.io/SurakshaAR/",
    status: "Verified Live Prototype",
    featured: true,
  },
  {
    id: "manak-setu",
    name: "ManakSetu",
    tagline: "AI-Powered Indian Standards (BIS) & QCO Recommendation Engine for Public Procurement",
    badge: "Smart India Hackathon 2026",
    badgeDetail: "Problem Statement SIH26108",
    category: "hackathon",
    problem:
      "Public procurement officers on GeM and departmental tenders spend hours manually identifying applicable Indian Standards (BIS) and Quality Control Orders (QCOs), risking tender invalidation or safety compliance failures if obsolete standards are cited.",
    solution:
      "Engineered a zero-hallucination recommendation engine that enforces strict retrieval against verified BIS datasets, combining vector embeddings and keyword scoring for tender compliance.",
    highlights: [
      "Strict zero-hallucination constraint: All standard numbers, versions, and certification mandates are retrieved directly from a verified local dataset.",
      "Hybrid search fusion combining dense vector embeddings (FastEmbed BAAI/bge-small-en-v1.5) and BM25 Okapi lexical scoring.",
      "Allied standards resolver using graph traversal to identify companion standards and mandatory Quality Control Orders.",
      "Clean procurement interface developed with React, Tailwind CSS, and Lucide React icons, connected to FastAPI backend services.",
    ],
    technologies: ["React", "Tailwind CSS", "FastAPI", "PostgreSQL", "pgvector", "FastEmbed", "BM25 Search"],
    githubUrl: "https://github.com/tusharambastha/ManakSetu",
    liveUrl: "https://tusharambastha.github.io/ManakSetu/",
    status: "Verified Live Prototype",
    featured: true,
  },
  {
    id: "scheme-sathi",
    name: "SchemeSathi AI",
    tagline: "Multi-Agent Citizen Eligibility & Plain-Language Government Scheme Engine",
    badge: "OIST ACM / AOC",
    badgeDetail: "Team Paradox Smashers",
    category: "fullstack",
    problem:
      "Eligible citizens frequently miss out on critical government welfare benefits because eligibility conditions are written in dense administrative language across fragmented departmental sites.",
    solution:
      "Collaborated with Team Paradox Smashers to build an AI platform that evaluates a single user profile (age, income, category, occupation) and returns scored recommendations with 2-line plain Hindi explanations.",
    highlights: [
      "Eligibility Agent: Analyzes user demographic parameters against scheme rules to produce eligibility scores (0-100) with clear justification.",
      "Explainer Agent: Translates complex bureaucratic eligibility language into 2-line plain Hindi explanations for everyday citizens.",
      "Spring Boot 3.2.5 REST API backend with server-side caching for deterministic and low-latency responses.",
      "Dockerized deployment architecture with clear separation between frontend client and Java backend services.",
    ],
    technologies: ["React", "Java", "Spring Boot 3.2.5", "REST APIs", "LLM Reasoning Agents", "Docker"],
    githubUrl: "https://github.com/tusharambastha/OIST-ACM-AOC-ParadoxSmashers",
    liveUrl: "https://tusharambastha.github.io/OIST-ACM-AOC-ParadoxSmashers/",
    status: "Verified Live Prototype",
    featured: true,
  },
  {
    id: "crypto-vault",
    name: "CryptoVault",
    tagline: "Decentralized Ether Vault smart contract managing secure deposits and balance tracking",
    badge: "Open Source",
    badgeDetail: "Solidity Learning Project",
    category: "systems",
    problem:
      "Gaining hands-on familiarity with blockchain state transitions, smart contract security checks, and EVM deposit/withdrawal patterns.",
    solution:
      "Wrote and deployed a foundational Solidity vault contract managing secure Ether deposits, individual balance records, and withdrawal safeguards.",
    highlights: [
      "State-tracked Ether deposits and balance accounting.",
      "Withdrawal transaction handling with balance validation checks.",
      "Event emissions for on-chain auditability and verification.",
    ],
    technologies: ["Solidity", "Smart Contracts", "Ethereum"],
    githubUrl: "https://github.com/tusharambastha/CryptoVault",
    liveUrl: null, // Transparently indicate no live web app exists
    status: "Open Source Contract",
    featured: false,
  },
];

export const experienceData = [
  {
    organization: "Royal Enfield",
    role: "Automobile Engineering Practical Training",
    duration: "April 2025 (5-Day Vocational Training)",
    location: "Practical Training Center",
    type: "Vocational Engineering Training",
    scopeNote: "Mechanical & Automobile Engineering Practical Program (Non-Software)",
    summary:
      "Completed a five-day intensive vocational engineering training focused on automotive systems, assembly line operations, and industrial manufacturing workflows.",
    performed: [
      "Participated in hands-on technical workshops examining two-wheeler engine cycles and mechanical transmission assemblies.",
      "Studied component tolerance measurements and mechanical testing methods used in motorcycle manufacturing.",
    ],
    observed: [
      "Observed industrial assembly line workflows, automated manufacturing operations, and quality inspection stages.",
      "Learned about shop-floor safety regulations, industrial compliance, and preventive maintenance protocols.",
    ],
  },
];

export const educationData = [
  {
    institution: "Oriental Institute of Science & Technology, Bhopal",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    duration: "2024 – 2028",
    status: "Currently Enrolled (Undergraduate)",
    highlights: [
      "Core coursework: Data Structures and Algorithms, Object-Oriented Programming with Java, Web Development Fundamentals, Database Systems.",
      "Active participant in technical hackathons (Smart India Hackathon 2026, OIST ACM initiatives).",
      "Focused on practical implementation of computer science fundamentals through self-driven projects.",
    ],
  },
];
