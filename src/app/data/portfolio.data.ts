import { Certification, LiveDemoProject, Metric, SkillGroup, TimelineRole } from '../models/portfolio.models';

export const NAME = 'Seyha Uong';
export const ROLE = 'Senior .NET Full Stack Developer';

export const QUICK_FACTS: string[] = [
  'Cloud-native SaaS at 100K+ users scale',
  'C#, Python, .NET 8, Angular 18, MS Azure, SQL/NO-SQL, AI-assisted, Vibe Coding'
];

export const METRICS: Metric[] = [
  {
    value: '200+',
    label: 'Microservices Delivered',
    detail: 'Frontend and backend services shipped for large-scale SaaS environments.'
  },
  {
    value: '100K+',
    label: 'Platform Users Supported',
    detail: 'Production systems designed for sustained enterprise throughput and reliability.'
  },
  {
    value: '30-50%',
    label: 'Team Productivity Lift',
    detail: 'Achieved through quality gates, automation, and AI-assisted development workflows.'
  },
  {
    value: '20%+',
    label: 'Performance Improvements',
    detail: 'Data and API optimizations that improved speed and responsiveness.'
  }
];

export const LIVE_DEMO_PROJECTS: LiveDemoProject[] = [
  {
    title: 'E-Commerce Shopping Cart Demo',
    summary: 'This project is a small demo of an E-Commerce Shopping Cart application.',
    purpose:
      'It is specifically designed for demonstration purposes to showcase modern web development practices and technologies.',
    tech: ['.NET 10', 'Angular 21', 'EF Core', 'SQL Server', 'GitHub', 'Docker', 'Redis', 'MS Azure'],
    link: 'https://shopnet2k6.azurewebsites.net/'
  },
  {
    title: 'AI Document RAG QA Multi-Agents on LangGraph',
    summary: 'A document question-answering system that uses a multi-agent pipeline built on LangGraph to deliver accurate, verified answers from uploaded documents — rejecting off-topic queries and re-researching when answers fail verification.',
    purpose: 'Build a self-correcting document Q&A system that refuses off-topic questions, generates grounded answers using only evidence from uploaded documents, verifies every answer for factual support, and supports multiple document formats with a simple drag-and-drop web UI.',
    tech: ['Python', 'LangGraph', 'OpenAI GPT-4o-mini', 'ChromaDB', 'BM25', 'Docling', 'Gradio', 'LangChain'],
    githubLink: 'https://github.com/uongseyha/ai-doc-rag-qa-multi-agents-langGraph'
  },
  {
    title: 'AI RAG YouTube Summarizer',
    summary: 'A Retrieval-Augmented Generation (RAG) application that extracts YouTube video transcripts and uses IBM WatsonX foundation models to generate concise summaries and answer natural-language questions about video content.',
    purpose:
      'Built to demonstrate RAG pipeline engineering for video content: transcript extraction via youtube-transcript-api, text chunking, vector embedding with IBM Slate-30m, FAISS similarity retrieval, and LLM-powered summarization and Q&A using IBM WatsonX Mistral-Medium — all served through a Gradio web UI.',
    tech: ['Python', 'LangChain', 'IBM watsonx.ai', 'Mistral-Medium LLM', 'IBM Slate-30m Embeddings', 'FAISS', 'Gradio', 'youtube-transcript-api'],
    githubLink: 'https://github.com/uongseyha/ai-youtube-summarizer'
  },
  {
    title: 'AI RAG Chatbot — PDF Q&A with IBM watsonx.ai',
    summary: "A Retrieval-Augmented Generation (RAG) chatbot that lets users upload any PDF document and ask natural-language questions against it — grounded in the document's actual content, not hallucinated guesses.",
    purpose:
      'Built to demonstrate end-to-end RAG pipeline engineering: document ingestion, semantic chunking, vector embedding, similarity retrieval, and LLM-powered answer synthesis — using IBM watsonx.ai and LangChain as the AI backbone.',
    tech: ['Python', 'LangChain', 'IBM watsonx.ai', 'Mistral-Medium LLM', 'IBM Slate-125m Embeddings', 'ChromaDB', 'Gradio', 'PyPDFLoader'],
    githubLink: 'https://github.com/uongseyha/ai-rag-chatbot'
  }
];

export const JOURNEY: TimelineRole[] = [
  {
    title: 'Senior Software Engineer',
    company: 'GEP Worldwide',
    location: 'Clark, New Jersey',
    period: 'Mar 2020 - Present',
    bullets: [
      'Architected and maintained cloud-native microservices architecture platform using C#, .NET 8, Python, EF Core, Dapper, and SQL Server/MongoDB, supporting 10K+ product uploads per batch with high reliability.',
      'Designed and implemented event driven architecture, API Gateway, Publish/Subscribe patterns using Azure Service Bus and Kafka to enable scalable asynchronous workflows.',
      'Improved frontend performance (Angular, RxJS, NgRx) resulting in 30% faster load times.',
      'Implemented CI/CD pipelines using GitHub Actions and Azure DevOps, reducing deployment time by 35%.',
      'Designed end-to-end checkout workflow using BPM (Camunda), reducing processing errors by 25%.',
      'Optimized SQL Server and NoSQL databases (MongoDB, Cosmos DB, Redis) for performance and scalability.',
      'Enhanced observability using Elasticsearch, Kibana, New Relic, and Kusto, reducing incident by 40%.',
      'Boosted engineering productivity 30–50% by implementing AI-assisted development practices using GitHub Copilot, Claude, Cursor',
      'Mentored junior engineers and conducted code reviews, improving team code quality and consistency.'
    ]
  },
  {
    title: '.NET Full Stack Developer',
    company: 'Comcast',
    location: 'West Chester, Pennsylvania',
    period: 'Aug 2019 - Feb 2020',
    bullets: [
      'Migrated .NET MVC monolith to .NET Core microservices, utilizing Angular micro-frontends to enable independent deployments and increase system scalability by 40%.',
      'Architected high-volume RESTful APIs (Swagger) to bridge legacy SOAP services, streamlining enterprise customer billing workflows and reducing data latency by 15%.',
      'Automated CI/CD pipelines via GoCD and GitHub, integrating SonarQube and NUnit to enforce code quality and accelerate the release cadence by 20%.'
    ]
  },
  {
    title: 'Senior .NET Developer',
    company: 'BiKay',
    location: 'Phnom Penh, Cambodia',
    period: 'Oct 2016 - Oct 2018',
    bullets: [
      'Supervised and mentored engineers, improving delivery quality, engineering standards, and team productivity',
      'Defined technical architecture and reviewed designs to ensure scalability, security, and performance',
      'Optimized applications for security best practices, SEO performance, and page-load efficiency'
    ]
  },
  {
    title: '.NET Developer',
    company: 'KHMERDEV',
    location: 'Phnom Penh, Cambodia',
    period: 'Jun 2013 - Sep 2016',
    bullets: [
      'Delivered 10+ enterprise/medium systems across government, aviation, and insurance domains. Development of mission-critical platforms and established Agile, testing, and performance best practices.'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'AI',
    items: ['GitHub Copilot', 'Vibe Coding', 'Claude', 'Cursor']
  },
  {
    title: 'Backend',
    items: ['C#', 'Python', '.NET 10', 'ASP.NET MVC', 'Web API / RESTFul APIs', 'Entity Framework', 'ORM', 'Dapper', 'LINQ', 'AutoMapper']
  },
  {
    title: 'Architecture & Practices',
    items: ['Microservices', 'Agile Scrum', 'Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'API Gateway', 'Camunda BPM', 'SOLID Principles', 'OOP', 'Design Patterns']
  },
  {
    title: 'Frontend & UI',
    items: ['Angular 21', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'SignalR', 'Material UI', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Cloud & Platform',
    items: ['Microsoft Azure (App Services, Functions, DevOps)', 'CI/CD', 'GitHub Actions', 'Azure Kubernetes Service (AKS)', 'Docker']
  },
  {
    title: 'Data & Observability',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Cosmos DB', 'Elastic/Kibana', 'Kusto']
  },
  {
    title: 'Others',
    items: ['RabbitMQ', 'Kafka', 'Camunda', 'Elasticsearch', 'Kibana', 'Polly', 'Ocelot', 'New Relic', 'SonarQube', 'Swagger', 'Postman', 'Jira', 'Confluence']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'IBM: Building AI Agents and Agentic Workflows Specialization',
    link: 'https://www.credly.com/badges/ca36b6c2-b52c-41a0-9292-043092bdb95c'
  },
  {
    title: 'IBM: RAG for Generative AI Applications Specialization',
    link: 'https://www.credly.com/badges/c15f2b9d-d16d-40cc-9eab-93506297a8f1'
  },
  {
    title: 'IBM: Agentic AI with LangChain and LangGraph',
    link: 'https://www.credly.com/badges/a75bc271-f060-44e4-aaf9-60abad163a84'
  },
  {
    title: 'IBM: Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI',
    link: 'https://www.credly.com/badges/3bd6b1ec-d3f8-4261-bf81-ff924f41db49'
  },
  {
    title: 'IBM: Python for Data Science, AI & Development',
    link: 'https://www.credly.com/badges/04608bda-91fa-42aa-aaa9-9425f62d7f53'
  },
  {
    title: 'IBM: Build Multimodal Generative AI Applications',
    link: 'https://www.credly.com/badges/d93633f5-8fb6-4ecb-b31d-6489d1239eaf'
  },
  {
    title: 'UDEMY: .NET Microservices with Azure AKS',
    link: 'https://www.udemy.com/certificate/UC-b419f7f6-7449-4eb9-9b3d-1eb192c1ca6a/'
  }
];

export const EDUCATION: string[] = [
  'Master of Computer Science - Maharishi University of Management (Fairfield, Iowa)',
  'Bachelor of Management Information Systems - SETEC Institute (Phnom Penh, Cambodia)'
];
