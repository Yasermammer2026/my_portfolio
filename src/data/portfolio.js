export const personal = {
  name: 'Yaser Abumuamar',
  role: 'Software Engineer',
  roles: ['Software Engineer', 'Full-Stack Developer', 'Security Researcher', 'CS Student @ TCD'],
  location: 'Dublin, Ireland',
  email: 'mummery@tcd.ie',
  phone: '+353830163868',
  linkedin: 'https://linkedin.com/in/yasser-muammar',
  github: 'https://github.com/Yasermammer2026',
  gitlab: 'https://gitlab.scss.tcd.ie/mummery',
  bio: `Motivated Computer Science student from Palestine with three years of software engineering
studies completed in Gaza. After relocating to Ireland, I transferred to Trinity College Dublin
and was accepted directly into Year 3 of the Computer Science programme. I am committed to
building strong technical skills and developing my career in Ireland's technology industry.`,
  image: `${import.meta.env.BASE_URL}image/home.png`,
}

export const skills = [
  {
    category: 'Languages & Web',
    icon: '💻',
    items: [
      { name: 'Python',     proficiency: 'Advanced',     color: '#3776ab' },
      { name: 'JavaScript', proficiency: 'Intermediate', color: '#f7df1e' },
      { name: 'HTML',       proficiency: 'Advanced',     color: '#e34f26' },
      { name: 'CSS',        proficiency: 'Advanced',     color: '#1572b6' },
      { name: 'SQL',        proficiency: 'Expert',       color: '#00758f' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: [
      { name: 'Git',     proficiency: 'Expert', color: '#f05032' },
      { name: 'GitHub',  proficiency: 'Expert', color: '#ffffff' },
      { name: 'GitLab',  proficiency: 'Expert', color: '#fc6d26' },
    ],
  },
  {
    category: 'Practices',
    icon: '⚙️',
    items: [
      { name: 'DevOps',           proficiency: 'Intermediate', color: '#00abf0' },
      { name: 'Agile / Scrum',    proficiency: 'Expert',   color: '#7c3aed' },
      { name: 'Database Design',  proficiency: 'Advanced', color: '#10b981' },
      { name: 'Security Testing', proficiency: 'Intermediate', color: '#ef4444' },
      { name: 'RESTful APIs',     proficiency: 'Intermediate', color: '#f59e0b' },
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
    links: { github: '#' },
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
    links: { github: '#' },
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
    links: { github: 'https://github.com/Yasermammer2026' },
  },
]

export const experience = [
  {
    id: 1,
    title: 'MCP AI Servers Project',
    company: 'IBM & Trinity College Dublin',
    type: 'College Project',
    period: '2026 – Present',
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
    id: 2,
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
    id: 3,
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
    detail: 'Accepted directly into Junior Sophister (Year 3) based on studies completed in Gaza. Currently completing third year; expected graduation 2027.',
    icon: '🎓',
    color: '#00abf0',
  },
  {
    id: 2,
    degree: 'Software Engineering, 3 Years',
    institution: 'University of Palestine',
    period: '2020 – 2023',
    location: 'Gaza, Palestine',
    detail: 'Completed advanced coursework in Object-Oriented Programming, Data Structures, and Databases.',
    icon: '📚',
    color: '#7c3aed',
  },
]
