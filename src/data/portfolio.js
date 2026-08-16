export const personal = {
  name: 'Yaser Abumuamar',
  role: 'ML Engineer',
  roles: ['ML Engineer', 'Software Engineer', 'CS Student @ TCD'],
  location: 'Dublin, Ireland',
  email: 'mummery@tcd.ie',
  phone: '+353830163868',
  linkedin: 'https://linkedin.com/in/yasser-muammar',
  github: 'https://github.com/Yasermammer2026',
  gitlab: 'https://gitlab.scss.tcd.ie/mummery',
  bio: `Computer Science student at Trinity College Dublin with a background in software engineering
and practical experience in embedded systems, machine learning, and Edge AI through academic and
internship projects. I've worked with sensor data and anomaly detection on resource-constrained
hardware, and I have a growing personal interest in developing AI-driven trading systems for forex
and cryptocurrency markets.`,
  image: `${import.meta.env.BASE_URL}image/home.png`,
}

export const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: [
      { name: 'Python',      proficiency: 'Advanced', color: '#3776ab' },
      { name: 'SQL',         proficiency: 'Expert',   color: '#00758f' },
      { name: 'HTML & CSS',  proficiency: 'Advanced', color: '#e34f26' },
    ],
  },
  {
    category: 'ML & Data',
    icon: '🧠',
    items: [
      { name: 'Machine Learning',  proficiency: 'Intermediate', color: '#ff6f00' },
      { name: 'Data Analysis',     proficiency: 'Advanced',     color: '#4dabcf' },
      { name: 'Signal Processing', proficiency: 'Intermediate', color: '#f59e0b' },
      { name: 'Edge AI / TinyML',  proficiency: 'Intermediate', color: '#00abf0' },
    ],
  },
  {
    category: 'Software Engineering',
    icon: '⚙️',
    items: [
      { name: 'REST APIs',       proficiency: 'Advanced', color: '#f59e0b' },
      { name: 'Database Design', proficiency: 'Advanced', color: '#10b981' },
      { name: 'Git & GitHub',    proficiency: 'Expert',   color: '#f05032' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'MCP AI Servers Security',
    subtitle: 'IBM & Trinity College Dublin',
    description:
      'Collaborating with IBM on MCP (Model Context Protocol) AI server security. Leading security tests, implementing scanning policies, and documenting vulnerabilities to inform best-practice guidelines for AI server deployments.',
    tags: ['Security', 'AI', 'Python', 'MCP Protocol'],
    image: new URL('../assets/mcp_servers.png', import.meta.url).href,
    color: 'from-blue-500/20 to-purple-600/20',
    accent: '#00abf0',
    status: 'Completed',
    year: '2026',
    links: { github: 'https://github.com/Yasermammer2026/mcp-context-forge' },
  },
  {
    id: 2,
    title: 'AI Expense Tracker',
    subtitle: 'Trinity College Dublin',
    description:
      'Built and managed the database layer for an AI-powered expense-tracking application. Designed secure, efficient data storage and server-side logic, collaborating with front-end and AI teammates to ensure reliable data flow.',
    tags: ['SQL', 'Python', 'RESTful APIs', 'Git'],
    image: new URL('../assets/AI_expenses.png', import.meta.url).href,
    color: 'from-emerald-500/20 to-cyan-600/20',
    accent: '#10b981',
    status: 'Completed',
    year: '2025',
    links: { github: 'https://gitlab.scss.tcd.ie/mummery' },
  },
  {
    id: 3,
    title: 'SecureChat',
    subtitle: 'Hybrid-Encrypted Messaging App',
    description:
      'End-to-end encrypted group messaging platform using RSA-2048-OAEP + AES-256-GCM hybrid encryption. Features digital signatures (RSA-PSS), self-signed certificate management, forward access control, and real-time AJAX message refresh. 41 pytest tests covering crypto round-trips and HTTP flows.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'AES-256-GCM', 'RSA-2048', 'PyCA'],
    image: new URL('../assets/secure_chat.png', import.meta.url).href,
    color: 'from-violet-500/20 to-pink-600/20',
    accent: '#7c3aed',
    status: 'Completed',
    year: '2025',
    links: { github: 'https://github.com/Yasermammer2026/SecureChat-Blockchain' },
  },
]

export const experience = [
  {
    id: 1,
    title: 'ML Engineer Intern',
    company: 'Ubotica Technologies',
    type: 'Summer Internship',
    period: 'June 2026 – August 2026',
    location: 'Dublin, Ireland',
    description: [
      'Collected sensor data (vibration, acoustic, environmental) from STM32 embedded hardware for predictive maintenance applications.',
      'Implemented wireless data transmission over RS-485 and Wi-Fi on resource-constrained embedded hardware for real-time data delivery.',
      'Engineered input features from raw sensor data to train an autoencoder-based anomaly detection model.',
      'Deployed the trained model on edge hardware for real-time anomaly detection without reliance on centralised data centres.',
      'Investigated Wi-Fi throughput, sensor data rates, compression, and MQTT communication to identify pipeline bottlenecks.',
    ],
    tags: ['ML', 'Edge AI', 'STM32', 'Anomaly Detection'],
    color: '#f97316',
  },
  {
    id: 2,
    title: 'MCP AI Servers Project',
    company: 'IBM & Trinity College Dublin',
    type: 'College Project',
    period: 'Jan 2026 – Apr 2026',
    location: 'Dublin, Ireland',
    description: [
      'Collaborating with IBM on MCP (Model Context Protocol) AI server security research.',
      'Leading security tests and implementing security policies for automated scanning tools.',
      'Identifying and documenting vulnerabilities for AI server deployment best practices.',
    ],
    tags: ['Security', 'AI', 'MCP', 'Research'],
    color: '#00abf0',
  },
  {
    id: 3,
    title: 'Back-End Developer',
    company: 'Trinity College Dublin',
    type: 'Expense Tracking System',
    period: 'Sep 2025 – Dec 2025',
    location: 'Dublin, Ireland',
    description: [
      'Built and managed the database layer for an AI-powered expense-tracking application.',
      'Designed secure, efficient data storage and server-side logic for core features.',
      'Collaborated with front-end and AI teams to ensure scalability and system integrity.',
    ],
    tags: ['SQL', 'Python', 'RESTful APIs', 'Git'],
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Web Developer (Front-End Intern)',
    company: 'Gaza Sky Geeks',
    type: 'Internship',
    period: 'May 2023 – Oct 2023',
    location: 'Palestinian Authority',
    description: [
      'Contributed to responsive, user-friendly web interfaces for client projects.',
      'Built reusable UI components applying modern front-end best practices.',
      'Translated design mockups into clean, maintainable code improving UX.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#f59e0b',
  },
]

export const education = [
  {
    id: 1,
    degree: 'B.A. (Mod.) Computer Science',
    institution: 'Trinity College Dublin',
    period: '2025 – 2027 (Expected)',
    location: 'Dublin, Ireland',
    detail: 'Accepted directly into Junior Sophister (Year 3) based on studies completed in Palestine. Completed third year and entering fourth year, with expected graduation in 2027.',
    icon: '🎓',
    color: '#00abf0',
  },
  {
    id: 2,
    degree: 'Software Engineering, 3 Years',
    institution: 'University of Palestine',
    period: '2020 – 2023',
    location: 'Palestine',
    detail: 'Completed advanced coursework in Object-Oriented Programming, Data Structures, and Databases.',
    icon: '📚',
    color: '#7c3aed',
  },
]
