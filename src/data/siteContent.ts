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

export interface ScribbleStrokeOverlay {
  id: string
  type: 'stroke'
  variant: 'slash' | 'loop' | 'pointer'
  x: string
  y: string
  width: string
  height?: string
  rotation?: number
}

export interface ScribbleCalloutOverlay {
  id: string
  type: 'callout'
  text: string
  x: string
  y: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg'
}

export type ProjectHoverOverlay = ScribbleStrokeOverlay | ScribbleCalloutOverlay

export interface ProjectItem {
  id: string
  title: string
  timeline: string
  summary: string
  role: string
  impact: string
  stack: string[]
  tag: string[]
  confidential?: boolean
  cursorMode: CursorMode
  assetIds: string[]
  hoverOverlays?: ProjectHoverOverlay[]
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
    title: 'ET-Delivery',
    timeline: 'Dec 2024 - Jul 2025',
    summary:
      'Dispatch, booking lifecycle, payments, logistics reporting, and backend operations for a production-oriented mobility platform.',
    role: 'Sole backend engineer',
    impact: 'Booking, routing, payment, and operations infrastructure.',
    stack: ['NestJS', 'TypeScript', 'MySQL', 'TypeORM', 'Docker', 'Firebase'],
    tag: ['logistics', 'payments', 'operations'],
    confidential: true,
    cursorMode: 'inspect',
    assetIds: ['asset-project-et-delivery'],
    hoverOverlays: [
      {
        id: 'et-delivery-slash',
        type: 'stroke',
        variant: 'slash',
        x: '74%',
        y: '20%',
        width: '42%',
        rotation: -6,
      },
      {
        id: 'et-delivery-callout',
        type: 'callout',
        text: 'dispatch ready',
        x: '66%',
        y: '30%',
        rotation: -4,
        size: 'md',
      },
    ],
  },
  {
    id: 'Navi-Thera',
    title: 'NaviThera ',
    timeline: 'Apr 2025 - Apr 2026',
    summary:
      'Sessions, subscriptions, chat/call infrastructure, therapist operations, and healthcare integration planning.',
    role: 'Sole backend engineer',
    impact: 'Real-time coordination, scheduling, subscriptions, and care flows.',
    stack: ['NestJS', 'MySQL', 'WebSockets', 'LiveKit', 'Firebase', 'Docker'],
    tag: ['healthcare', 'real-time', 'operations'],
    confidential: true,
    cursorMode: 'open',
    assetIds: ['asset-project-therapy'],
    hoverOverlays: [
      {
        id: 'navi-loop',
        type: 'stroke',
        variant: 'loop',
        x: '38%',
        y: '70%',
        width: '52%',
        height: '22%',
        rotation: 7,
      },
      {
        id: 'navi-callout',
        type: 'callout',
        text: 'care flow',
        x: '22%',
        y: '78%',
        rotation: -7,
        size: 'lg',
      },
    ],
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
    tag: ['e-commerce', 'recommendation', 'knowledge graphs'],
    cursorMode: 'drag',
    assetIds: ['asset-project-ebp'],
    hoverOverlays: [
      {
        id: 'ebp-pointer',
        type: 'stroke',
        variant: 'pointer',
        x: '78%',
        y: '58%',
        width: '18%',
        height: '20%',
        rotation: 14,
      },
      {
        id: 'ebp-callout',
        type: 'callout',
        text: 'graph signals',
        x: '70%',
        y: '42%',
        rotation: -10,
        size: 'md',
      },
    ],
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
    value: 'CV',
    href: 'https://s3.amazonaws.com/attachments.angel.co/14361982-3f7c51015a5ef62706aec88495f42959.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQQXOZPIDU%2F20260601%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260601T160054Z&X-Amz-Expires=3223&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCbAHizbqqygzagz2h3Fk8scwqbP1GkPyRfdKnhByYk2gIgDUJ1B%2Fw65ZwFh4%2FUA5YmCb9WUrQs2oJAVyAcxob1IJ0qjAUIERAAGgwyMDc1ODMyNzA0MzMiDHhi2qwr08s81gpauirpBH4Tw5ETzz3%2F03XzuWwlE5MwHYE40OVdpuHKPid7F7keA%2Fs6JJhd2f%2FmHBgPbhDQtikh5ilCm60Qy9nmmHECbEw%2FkaCcqr0GisyPws2GCpcqkLJWTpO9fkwhqL7wZHdWFM4OSEbfQL97xsE8sz8QkSLtXqbu8ufnpBNIT8Fwz%2BZP8kclthvlH3Py%2FMGwwA1Mvxb7NdQL%2B4ywyhK%2BqbFWFho4ht5ERs5qXqm4Wvygvm3q0sqFN5Z9qHToBZtZfs%2BdmlS6wjHOYp6X6AnTMBp55RfQBIuAdiZoDtbcYGH9RhrnADIaXvVW4UFc0j1S0lOB4kgcWhyiaMVbzMjNmlb1cSHrGLZs2NxJezgfI0emEwKdYn13UzxwM80kXJD1YnIVkguLnmlGs9Te2n1L0Ls4jOGr%2BZrSR%2FY5Ndwp2sH2Vt1TqkmZm5uplADL954x4FuXIFn0C%2Bs5GnXic5FFhOx2oVI%2BRBiUjC5kExTQHa04dDwyYbgWL%2FngfuCXsbjASHeSNIJOm%2Bw7BDCin2p%2BVxxJ0WiydN2W8nfBWVCmMcPDXynnybolUiuiyL515XkaxTOL2mszZq9UcuWGcGcsO%2B5it895WLyMYv3ni8Ldgog7jkJwzerhR%2B5Bp0IS%2Bkwo78kejgl%2BXwzd4W6lgiVxrUq%2BRiZnd4pkr2ntEKpCoBIl56MZryclE5KUOcgdnPfy4CROUE%2FJ0Sv4G1PPNEhbWnF8jLsbQsNbYgP7LIHqOb4ICftzdz4D7%2FHk5FIE56%2FsXJ0%2Bj4sJVS7xYyqw3Mn8Fn8iJ8xJ33UYGUHvPaxTDxi74yRG3tcRrnDNRAkzML3W9tAGOpgB6Mtia7py1CR002BlSYvub2taxuUBSBFUoGSKsQY%2FF85BcC2TDAsDSUPejOPC8Ala0Iw6AaP91Bnu06CLt9Bws2TM%2BmxHfTOD79STf0mWfj%2BOBas6Gt85zdR%2FY2Ku47NkmF4r8yfQMV5XN%2FVbmRS6D373mMRRML4yizXtoMrJgm%2Bp7%2BW9ODW6RJE3l9Ona15rPlEMXC54T0E%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=44a282b82af06ede2db0dd955db180c0a271d627bb68663b7febb45aa1332f9a',
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
    items: ['NestJS'],
  },
  {
    id: 'data',
    title: 'Databases & Knowledge Systems',
    items: ['MySQL', 'SQLite', 'MongoDB', 'Neo4j', 'Graph Modeling'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    items: ['Docker', 'Linux', 'VirtualBox'],
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
