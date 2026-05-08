export type CursorMode = 'default' | 'inspect' | 'open' | 'drag'

export interface AssetAnnotation {
  id: string
  label: string
  trigger: 'hover' | 'click'
  x: string
  y: string
  rotation?: number
}

export interface AssetItem {
  id: string
  name: string
  kind: 'hero-image' | 'cutout' | 'scribble' | 'label' | 'cursor' | 'texture'
  source: 'licensed-reference' | 'original' | 'generated' | 'tbd'
  file: string
  notes: string
  cursorMode?: CursorMode
  annotations?: AssetAnnotation[]
}

export interface ProjectItem {
  id: string
  title: string
  timeline: string
  summary: string
  role: string
  impact: string
  stack: string[]
  confidential?: boolean
  cursorMode: CursorMode
  assetIds: string[]
}

export interface SocialItem {
  id: string
  label: string
  href: string
  note: string
  cursorMode: CursorMode
}

export interface InfoCardItem {
  id: string
  label: string
  value: string
  href?: string
  cursorMode?: CursorMode
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  timeline: string
  summary: string
  areas?: Array<{
    title: string
    points: string[]
  }>
}

export interface SkillGroup {
  id: string
  title: string
  items: string[]
}

export const projects: ProjectItem[] = [
  {
    id: 'et-delivery',
    title: 'ET Delivery',
    timeline: 'Dec 2024 - Jul 2025',
    summary:
      'Dispatch, booking lifecycle, payments, logistics reporting, and backend operations for a production-oriented mobility platform.',
    role: 'Sole backend engineer',
    impact: 'Booking, routing, payment, and operations infrastructure.',
    stack: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'Docker', 'Firebase'],
    confidential: true,
    cursorMode: 'inspect',
    assetIds: ['asset-project-et-delivery'],
  },
  {
    id: 'Navi-Thera',
    title: 'Navi Thera ',
    timeline: 'Apr 2025 - Apr 2026',
    summary:
      'Sessions, subscriptions, chat/call infrastructure, therapist operations, and healthcare integration planning.',
    role: 'Sole backend engineer',
    impact: 'Real-time coordination, scheduling, subscriptions, and care flows.',
    stack: ['NestJS', 'MySQL', 'WebSockets', 'LiveKit', 'Firebase', 'Docker'],
    confidential: true,
    cursorMode: 'open',
    assetIds: ['asset-project-therapy'],
  },
  {
    id: 'ebp',
    title: 'ETHIO Best Price',
    timeline: 'Apr 2025 - Jul 2025',
    summary:
      'Marketplace backend with cart/checkout flows and Neo4j-based recommendation infrastructure.',
    role: 'Sole backend engineer',
    impact: 'Transactional commerce plus graph-based recommendation signals.',
    stack: ['NestJS', 'MySQL', 'Neo4j', 'Cypher', 'Docker'],
    cursorMode: 'drag',
    assetIds: ['asset-project-ebp'],
  },
]

export const socials: SocialItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Tibex88',
    note: 'code, backend systems, experiments',
    cursorMode: 'open',
  },
  {
    id: 'reusme',
    label: 'Website',
    href: 'https://tibebesolomon.vercel.app',
    note: 'current public presence',
    cursorMode: 'inspect',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:tibesolomon7@gmail.com',
    note: 'project inquiries and serious roles',
    cursorMode: 'open',
  },
  {
    id: 'cv',
    label: 'CV',
    href: '/Tibebe_Solomon_CV.pdf',
    note: 'full history and certifications',
    cursorMode: 'drag',
  },
]

export const hero = {
  eyebrow: 'Random sketches, backend systems and AI experiments',
  titleTop: 'Tibebe',
  titleBottom: 'Solomon',
  overlayWord: 'builds',
  subtitle: 'AI Engineering · Backend Systems · Research Engineering',
}

export const aboutOverlay = {
  title: 'Close',
  paragraphs: [
    "I am an AI engineer and backend systems builder based in Addis Ababa. My work spans backend architecture, symbolic and hybrid AI systems, research-oriented product development, and infrastructure-heavy technical implementation.",
    "After studying software engineering, I moved into multi-project engineering environments where I worked across logistics, mental-health platforms, e-commerce systems, recommendation infrastructure, and AI-adjacent research ecosystems. That work shaped how I think about systems design, not just feature delivery.",
    "I am especially interested in technically serious environments where backend engineering, research translation, infrastructure thinking, and architectural problem-solving can be applied to products that matter.",
    "My work is driven by systems thinking: I like building things that sit between product needs, engineering constraints, and longer-term technical leverage. That includes APIs, orchestration logic, data systems, integrations, deployment workflows, and experimental AI tooling.",
    "You can learn more through my portfolio, CV, GitHub, and the projects highlighted here."
  ]
}

export const infoCards: InfoCardItem[] = [
  {
    id: 'about',
    label: 'About:',
    value: 'More info',
    cursorMode: 'inspect',
  },
  {
    id: 'social',
    label: 'Social:',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tibebe-solomon-278294234/',
    cursorMode: 'open',
  },
  {
    id: 'contact',
    label: 'Contact:',
    value: 'Email me',
    href: 'mailto:tibesolomon7@gmail.com',
    cursorMode: 'open',
  },
  {
    id: 'work',
    label: 'Work:',
    value: 'Github',
    href: 'https://github.com/Tibex88',
    cursorMode: 'open',
  },
  {
    id: 'phone',
    label: 'Phone:',
    value: 'WhatsApp',
    href: 'https://wa.me/251923621874',
    cursorMode: 'drag',
  },
  {
    id: 'CV',
    label: 'History:',
    value: 'CV ',
    href: 'https://tibebesolomon.vercel.app/',
    cursorMode: 'inspect',
  },
]

export const experience: ExperienceItem[] = [
  {
    id: 'icog',
    company: 'iCog Labs',
    role: 'Software Engineer & Technical Lead',
    timeline: 'Jan 2024 – Present',
    summary:
      'Worked across backend engineering, AI product delivery, symbolic AI infrastructure, scientific workflow systems, and technical leadership in multi-project research-oriented environments.',
    areas: [
      {
        title: 'AI & Product Engineering',
        points: [
          'Designed and deployed scalable backend services for startup and client-facing products.',
          'Integrated Neo4j, Pinecone, RAG workflows, prompt-driven AI features, and secure API layers.',
          'Handled backend performance, modular architecture, testing, and deployment-oriented engineering work.',
        ],
      },
      {
        title: 'Symbolic AI & Research Infrastructure',
        points: [
          'Worked inside SingularityNET / Hyperon-adjacent environments around symbolic reasoning and knowledge systems.',
          'Contributed to graph ingestion pipelines, persistence and retrieval systems, and semantic data infrastructure.',
          'Bridged exploratory research concepts into implementable engineering systems.',
        ],
      },
      {
        title: 'Bioinformatics Systems',
        points: [
          'Built and maintained workflow orchestration and agentic scientific tooling in the Galaxy bioinformatics ecosystem.',
          'Supported research automation, workflow integration, and scientific data pipeline engineering.',
        ],
      },
      {
        title: 'Technical Leadership',
        points: [
          'Led multiple AI and bioinformatics-related projects and contributed to roadmap and sprint planning.',
          'Participated in technical review, project evaluation, prioritization, mentoring, and intern assessment.',
          'Helped coordinate engineering direction across evolving organizational structures and stakeholders.',
        ],
      },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'C++', 'Java'],
  },
  {
    id: 'backend',
    title: 'Frameworks & Backend',
    items: ['NestJS', 'REST APIs', 'Modular System Design'],
  },
  {
    id: 'data',
    title: 'Databases & Knowledge Systems',
    items: ['MySQL', 'SQLite', 'MongoDB', 'Neo4j', 'Pinecone', 'Cypher', 'Graph Modeling'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    items: ['AWS EC2', 'S3', 'Lambda', 'Docker', 'Linux', 'VirtualBox', 'Hyper-V'],
  },
  {
    id: 'ai',
    title: 'AI & Research Engineering',
    items: ['Symbolic / Hybrid AI', 'RAG', 'Agentic Systems', 'Knowledge Graphs', 'Prompt Engineering'],
  },
]

export const assets: AssetItem[] = [
  {
    id: 'asset-project-et-delivery',
    name: 'ET Delivery Hero',
    kind: 'hero-image',
    source: 'tbd',
    file: '/src/assets/local/et-delivery-hero-placeholder.png',
    notes: 'Large project anchor image or visual cover for the delivery backend.',
  },
  {
    id: 'asset-project-therapy',
    name: 'Therapy Platform Hero',
    kind: 'hero-image',
    source: 'tbd',
    file: '/src/assets/local/therapy-platform-hero-placeholder.png',
    notes: 'Large project anchor image for therapy platform section.',
  },
  {
    id: 'asset-project-ebp',
    name: 'EBP Hero',
    kind: 'hero-image',
    source: 'tbd',
    file: '/src/assets/local/ebp-hero-placeholder.png',
    notes: 'Large project anchor image for e-commerce / recommendation section.',
  },
]
