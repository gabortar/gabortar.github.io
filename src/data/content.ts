export type Project = {
  title: string;
  description: string;
  demonstrates: string[];
  tags: string[];
  href?: string;
  status: string;
};

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  href?: string;
};

export const services = [
  { number: '01', title: 'Core Backend & Tools', description: 'Design robust APIs, optimize databases, and build custom admin dashboards to keep your data flowing and your operations central.' },
  { number: '02', title: 'Workflow Automation', description: 'Bridge disconnected software, replace manual processes with reliable scripts, and eliminate repetitive tech tasks for your team.' },
  { number: '03', title: 'Applied AI & RAG', description: 'Integrate local LLMs, deploy semantic document search, and build intelligent workflows where AI actually adds measurable value.' },
];

export const projects: Project[] = [
  {
    title: 'Reporting Automation Toolkit',
    description: 'Reusable Python and SQL workflows for reports, exports, checks, and recurring operational data tasks.',
    demonstrates: [
      'Turning manual reporting into repeatable workflows',
      'Data validation and scheduled checks',
      'Practical automation around messy business data',
    ],
    tags: ['Python', 'SQL', 'Automation'],
    status: 'Toolkit',
  },
  {
    title: 'RAG Knowledge Assistant',
    description: 'Document search and Q&A prototype with grounded answers, citations, and practical retrieval workflows.',
    demonstrates: [
      'Document ingestion and retrieval',
      'Citation-backed answers',
      'AI features where traceability matters',
    ],
    tags: ['RAG', 'LLM', 'Search'],
    status: 'Prototype',
  },
  {
    title: 'JetTrace',
    description: 'ROS2 observability tooling for graph discovery, topic health, and runtime visibility in robotics systems.',
    demonstrates: [
      'Backend tooling for distributed systems',
      'Live system visibility',
      'Robotics/debugging infrastructure',
    ],
    tags: ['ROS2', 'Observability', 'Robotics'],
    status: 'In development',
  },
  {
    title: 'Local LLM Lab',
    description: 'Experiments with local models, GPU constraints, inference setup, and practical evaluation on consumer hardware.',
    demonstrates: [
      'Local inference setup',
      'Model/runtime comparison',
      'Hardware-aware AI experimentation',
    ],
    tags: ['Python', 'Open models', 'GPU'],
    status: 'Experiments',
  },
];

export const posts: Post[] = [
  {
    title: 'What makes automation worth maintaining?',
    excerpt: 'Notes on choosing the right level of engineering for recurring operational work.',
    date: 'Draft',
  },
  {
    title: 'Running useful local LLM experiments',
    excerpt: 'A practical look at hardware constraints, model choices, and meaningful evaluation.',
    date: 'Coming soon',
  },
  {
    title: 'Observability beyond web services',
    excerpt: 'Applying familiar observability ideas to distributed robotics systems.',
    date: 'Coming soon',
  },
];
