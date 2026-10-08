import { ProfileData, Project, SkillCategory, ExperienceItem } from '../types/portfolio';

// Generated asset paths
import heroPortrait from '../assets/images/hero_portrait_sakshi_1791446237939.jpg';
import projectPulseFlow from '../assets/images/project_pulse_flow_1791446256677.jpg';
import projectNexusCloud from '../assets/images/project_nexus_cloud_1791446271357.jpg';
import projectCanvasStudio from '../assets/images/project_canvas_studio_1791446286796.jpg';

export const INITIAL_PROFILE: ProfileData = {
  name: 'Sakshi Choudhary',
  title: 'Software Engineer at Accenture',
  tagline: 'Engineering enterprise software solutions, modern web systems, and scalable cloud experiences.',
  bioSummary: 'I am a Software Engineer who recently joined Accenture, having graduated in 2025 with a Bachelor of Technology in Computer Science & Engineering from India. I specialize in building responsive frontend systems, reliable backend services, and clean, scalable code that delivers real enterprise value.',
  bioFull: [
    'I am a Software Engineer at Accenture and a proud 2025 graduate in Computer Science & Engineering from India. My passion lies at the intersection of modern full-stack development, distributed cloud platforms, and intuitive user experiences.',
    'Throughout my academic journey and recent transition into Accenture, I have dedicated myself to mastering both core computer science fundamentals—data structures, system design, and algorithmic problem solving—and modern web ecosystems including React, TypeScript, Node.js, and Java/Spring.',
    'At Accenture, I contribute to enterprise digital engineering initiatives, building maintainable, high-performance web applications and collaborating with global teams. I believe in clean code craft, thoughtful engineering practices, and creating digital products that solve concrete business challenges.'
  ],
  email: 'sakshichy14@gmail.com',
  location: 'India (IST)',
  status: 'Software Engineer @ Accenture · B.Tech CSE Class of 2025 (India)',
  availability: 'Open to technical collaboration & tech community networking',
  githubUrl: 'https://github.com/sakshichoudhary',
  linkedinUrl: 'https://linkedin.com/in/sakshichoudhary',
  twitterUrl: 'https://x.com/sakshichy',
  avatarUrl: heroPortrait,
};

export const PROJECTS: Project[] = [
  {
    id: 'pulse-flow',
    title: 'PulseFlow',
    subtitle: 'Real-Time Streaming Telemetry & Analytics Platform',
    category: 'Full-Stack',
    featured: true,
    year: '2025',
    description: 'High-throughput time-series telemetry platform supporting live metric aggregations and low-latency anomaly detection.',
    longDescription: 'PulseFlow is an end-to-end distributed telemetry pipeline engineered to process live performance metrics. Built with Go ingest services, Apache Kafka, and a React 19 real-time dashboard powered by WebSockets, it provides instant observability into microservice health with sub-50ms query response times.',
    image: projectPulseFlow,
    tags: ['React 19', 'TypeScript', 'WebSockets', 'Go', 'Apache Kafka', 'Tailwind CSS'],
    metrics: [
      { label: 'Throughput', value: '120k events/sec' },
      { label: 'Query Latency (p99)', value: '42ms' },
      { label: 'Data Retention', value: '180M records' },
      { label: 'Cluster Uptime', value: '99.99%' }
    ],
    githubUrl: 'https://github.com/sakshichoudhary/pulseflow',
    liveUrl: 'https://pulseflow-demo.internal.app',
    architectureHighlights: [
      'Partition-aware streaming ingestion pipeline with backpressure buffer',
      'Client-side virtualized canvas time-series renderer supporting 10,000+ data points without dropped frames',
      'Automated schema evolution validation for streaming JSON payloads',
      'Configurable alert rule evaluation engine using Redis pub/sub'
    ]
  },
  {
    id: 'nexus-cloud',
    title: 'Nexus Cloud',
    subtitle: 'Enterprise Microservice Mesh & Service Orchestrator',
    category: 'Systems & Cloud',
    featured: true,
    year: '2025',
    description: 'Cloud control plane providing deterministic canary deployments, automatic routing, and cross-region traffic failover.',
    longDescription: 'Nexus Cloud simplifies enterprise microservice deployments. It provides an intuitive web console and declarative CLI for orchestrating zero-downtime rollouts, traffic splitting, and global edge caching across cloud instances.',
    image: projectNexusCloud,
    tags: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Deploy Velocity', value: '3.4x faster rollouts' },
      { label: 'Cost Efficiency', value: '40% reduction' },
      { label: 'Failover Speed', value: '< 2.0 seconds' },
      { label: 'Services Managed', value: '50+ microservices' }
    ],
    githubUrl: 'https://github.com/sakshichoudhary/nexus-cloud',
    liveUrl: 'https://nexuscloud-orchestrator.internal.app',
    architectureHighlights: [
      'Declarative state machine controller with automatic reconciliation loop',
      'Distributed lock coordination backed by transactional PostgreSQL',
      'Dynamic routing filter with millisecond canary shifts',
      'Role-based access control (RBAC) with cryptographic audit logging'
    ]
  },
  {
    id: 'canvas-studio',
    title: 'Canvas Studio',
    subtitle: 'Real-Time Spatial Vector Canvas & Collaborative Whiteboard',
    category: 'Frontend',
    featured: true,
    year: '2025',
    description: 'Hardware-accelerated infinite canvas with CRDT-backed real-time multi-cursor collaboration and sub-16ms render loop.',
    longDescription: 'A collaborative spatial design workspace built from scratch. Implements an optimized custom scene graph utilizing HTML5 2D Canvas with dual-buffer rendering, coupled with Yjs CRDTs over WebSockets for conflict-free simultaneous editing.',
    image: projectCanvasStudio,
    tags: ['React 19', 'TypeScript', 'Canvas API', 'Yjs CRDT', 'WebSockets', 'Tailwind CSS'],
    metrics: [
      { label: 'Rendering Loop', value: 'Steady 60 FPS' },
      { label: 'Sync Latency', value: '< 24ms' },
      { label: 'Concurrent Users', value: '100 per room' },
      { label: 'Bundle Size', value: '45 kB gzip' }
    ],
    githubUrl: 'https://github.com/sakshichoudhary/canvas-studio',
    liveUrl: 'https://canvas-studio-workspace.internal.app',
    architectureHighlights: [
      'Quad-tree spatial indexing algorithm for viewport culling and spatial hit testing',
      'Conflict-free Replicated Data Types (Yjs) with local offline undo/redo stack',
      'Multi-touch gesture recognition with inertial pan and geometric zoom math',
      'Export engine supporting SVG, high-DPI PNG, and portable JSON scene files'
    ]
  },
  {
    id: 'aura-ui',
    title: 'Aura Design System',
    subtitle: 'Accessible Enterprise Component Suite & Design Tokens',
    category: 'Frontend',
    featured: false,
    year: '2024',
    description: 'Modern enterprise design system emphasizing accessibility compliance, zero bundle waste, and fluid micro-interactions.',
    longDescription: 'Comprehensive component library built on React and Tailwind CSS. Provides production-grade accessible components tested across modern browsers with WCAG AA compliance and keyboard navigation.',
    image: projectCanvasStudio,
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Accessibility (a11y)', 'Storybook', 'Vitest'],
    metrics: [
      { label: 'Accessibility Score', value: '100/100 Lighthouse' },
      { label: 'Components Shipped', value: '35+ primitives' },
      { label: 'Test Coverage', value: '92% unit tested' }
    ],
    githubUrl: 'https://github.com/sakshichoudhary/aura-ui',
    liveUrl: 'https://aura-ui.internal.app',
    architectureHighlights: [
      'Full keyboard navigation and ARIA attribute state synchronization',
      'Dynamic token styling engine supporting dark mode and light theme',
      'Zero layout shift (CLS: 0.00) component primitives'
    ]
  },
  {
    id: 'sentinel-db',
    title: 'Sentinel Ledger',
    subtitle: 'Transactional Audit Log & State Verification Engine',
    category: 'Systems & Cloud',
    featured: false,
    year: '2024',
    description: 'Append-only audit ledger verifying database state transitions with Merkle tree proofs for strict compliance verification.',
    longDescription: 'Provides enterprise auditability without imposing database lock contention. Sentinel streams change data capture (CDC) events from PostgreSQL into an append-only log that produces verifiable proofs.',
    image: projectPulseFlow,
    tags: ['Python', 'PostgreSQL', 'FastAPI', 'Docker', 'Redis'],
    metrics: [
      { label: 'Audit Verification', value: '100% Tamper-evident' },
      { label: 'CDC Ingest Rate', value: '25,000 trans/sec' },
      { label: 'State Proofs', value: 'Merkle Root Validated' }
    ],
    githubUrl: 'https://github.com/sakshichoudhary/sentinel-ledger',
    liveUrl: 'https://sentinel-audit.internal.app',
    architectureHighlights: [
      'Merkle tree state verification with verifiable inclusion proofs',
      'Zero overhead on transactional OLTP databases via CDC replication slots',
      'Immutable cryptographic hash chaining per tenant'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Runtimes',
    description: 'Strong foundations in modern programming languages and typed ecosystems',
    skills: [
      { name: 'TypeScript', level: 'Expert', experienceYears: 3, relatedProjects: ['PulseFlow', 'Canvas Studio', 'Aura UI'] },
      { name: 'JavaScript (ESNext)', level: 'Expert', experienceYears: 4, relatedProjects: ['PulseFlow', 'Canvas Studio'] },
      { name: 'Java (Core & Spring)', level: 'Advanced', experienceYears: 3, relatedProjects: ['Accenture Enterprise'] },
      { name: 'Python', level: 'Advanced', experienceYears: 3, relatedProjects: ['Sentinel Ledger'] },
      { name: 'SQL (PostgreSQL / MySQL)', level: 'Expert', experienceYears: 3, relatedProjects: ['Nexus Cloud', 'Sentinel Ledger'] },
      { name: 'HTML5 & CSS3', level: 'Expert', experienceYears: 4, relatedProjects: ['Aura UI', 'Canvas Studio'] }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    description: 'Modern component architectures, state management, and fluid responsive design',
    skills: [
      { name: 'React 19 & Next.js', level: 'Expert', experienceYears: 3, relatedProjects: ['PulseFlow', 'Canvas Studio', 'Aura UI'] },
      { name: 'Tailwind CSS', level: 'Expert', experienceYears: 3, relatedProjects: ['PulseFlow', 'Aura UI'] },
      { name: 'State Architecture (Redux / Zustand)', level: 'Expert', experienceYears: 3, relatedProjects: ['Canvas Studio'] },
      { name: 'Web Accessibility (WCAG AA)', level: 'Advanced', experienceYears: 2, relatedProjects: ['Aura UI'] },
      { name: 'REST APIs & GraphQL Integration', level: 'Expert', experienceYears: 3, relatedProjects: ['Nexus Cloud'] },
      { name: 'Responsive Web Design', level: 'Expert', experienceYears: 4, relatedProjects: ['Aura UI'] }
    ]
  },
  {
    title: 'Backend, Cloud & Databases',
    description: 'Enterprise backend services, cloud platforms, and relational data modeling',
    skills: [
      { name: 'Node.js & Express', level: 'Expert', experienceYears: 3, relatedProjects: ['Nexus Cloud', 'PulseFlow'] },
      { name: 'Spring Boot & Microservices', level: 'Advanced', experienceYears: 2, relatedProjects: ['Accenture Enterprise'] },
      { name: 'PostgreSQL & MySQL', level: 'Expert', experienceYears: 3, relatedProjects: ['Nexus Cloud', 'Sentinel Ledger'] },
      { name: 'Redis (Caching & Pub/Sub)', level: 'Advanced', experienceYears: 2, relatedProjects: ['PulseFlow'] },
      { name: 'Docker & Containerization', level: 'Advanced', experienceYears: 2, relatedProjects: ['Nexus Cloud'] },
      { name: 'Cloud Computing (AWS / Azure)', level: 'Advanced', experienceYears: 2, relatedProjects: ['Nexus Cloud'] }
    ]
  },
  {
    title: 'Software Engineering Practices',
    description: 'Rigorous engineering methodologies, testing, and modern developer workflows',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Expert', experienceYears: 4 },
      { name: 'Git & Version Control', level: 'Expert', experienceYears: 4 },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 'Advanced', experienceYears: 2 },
      { name: 'Unit & Integration Testing (Jest/Vitest)', level: 'Advanced', experienceYears: 3 },
      { name: 'Agile & Scrum Methodologies', level: 'Expert', experienceYears: 2 },
      { name: 'Object-Oriented Design (SOLID)', level: 'Expert', experienceYears: 4 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'accenture',
    role: 'Software Engineer',
    company: 'Accenture',
    location: 'India',
    period: '2025 – Present',
    type: 'Full-time',
    summary: 'Recently joined Accenture to engineer enterprise software solutions, scalable full-stack web platforms, and digital transformation initiatives.',
    achievements: [
      'Contributing to modern full-stack application development utilizing React, TypeScript, and enterprise backend services.',
      'Collaborating with distributed agile engineering squads on clean code standards, module reviews, and component reusability.',
      'Participating in automated CI/CD pipeline deployments, integration testing, and quality assurance benchmarks.'
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'SQL', 'Git', 'Agile']
  },
  {
    id: 'tech-intern',
    role: 'Software Engineering Intern',
    company: 'Tech Innovations Lab',
    location: 'India',
    period: '2024 – 2025',
    type: 'Internship',
    summary: 'Engineered responsive client dashboards and RESTful API integrations for real-time telemetry systems.',
    achievements: [
      'Developed responsive UI modules using React and Tailwind CSS, improving client interaction speed by 35%.',
      'Created backend service endpoints with Node.js and PostgreSQL for real-time state synchronization.',
      'Wrote comprehensive unit tests with Jest, lifting code coverage across critical service modules to 85%.'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    id: 'academic-lead',
    role: 'Technical Lead — Capstone & Campus Community',
    company: 'University Engineering Cohort',
    location: 'India',
    period: '2023 – 2024',
    type: 'Academic Leadership',
    summary: 'Led the student engineering capstone project and organized tech bootcamps on full-stack web architectures.',
    achievements: [
      'Spearheaded the development of a real-time collaborative web platform used by 1,200+ students across departments.',
      'Conducted workshops on Data Structures & Algorithms, modern JavaScript, and Git version control for 60+ engineering students.'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'SQL', 'Algorithms', 'Git']
  }
];

export const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  institution: 'Engineering University, India',
  honors: 'Graduated in 2025 · First Class with Distinction',
  year: 'Class of 2025',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Cloud Computing & Distributed Systems',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering'
  ]
};
