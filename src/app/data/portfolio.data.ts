import { Certification, LiveDemoProject, Metric, SkillGroup, TimelineRole } from '../models/portfolio.models';

export const NAME = 'Seyha Uong';
export const ROLE = 'Senior .NET Full Stack Developer';

export const QUICK_FACTS: string[] = [
  'Cloud-native SaaS at 100K+ user scale',
  'C#, Python, .NET 10, Angular 21, MS Azure, SQL/NO-SQL, AI-assisted engineering, Vibe Coding'
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

export const JOURNEY: TimelineRole[] = [
  {
    title: 'Senior Software Engineer',
    company: 'GEP Worldwide',
    location: 'Clark, New Jersey',
    period: 'Mar 2020 - Present',
    bullets: [
      'Architected and delivered 200+ frontend and backend microservices for a scalable SaaS platform using C#, .NET 8, ASP.NET Web API, Angular 18, and TypeScript, supporting 100K+ users.',
      'Designed distributed backend architecture with API Gateway and event-driven Publish/Subscribe patterns using Azure Service Bus and Kafka, enabling resilient asynchronous workflows during peak traffic.',
      'Applied Microservices architecture, Domain-Driven Design (DDD), SOLID principles, OOP, and proven design patterns to build highly maintainable, testable, and scalable systems.',
      'Built modern, reusable Angular 18 applications with RxJS, NgRx, Bootstrap, Material UI, Tailwind, and SignalR, improving state management and real-time user experiences.',
      'Developed robust RESTful APIs and orchestrated critical business processes with Camunda BPM, including Save/Amend/Publish Product, Checkout, and Order Creation workflows.',
      'Improved SQL Server performance through normalization, indexing strategies (clustered/non-clustered), partitioning, query optimization, and execution-plan tuning.',
      'Designed and operated polyglot data platforms across SQL Server, PostgreSQL, MySQL, MongoDB, Redis, Azure Cosmos DB, and Couchbase, with ETL and reporting pipelines using SSIS/SSRS.',
      'Integrated Azure Logic Apps to streamline secure inbound and outbound third-party system communication.',
      'Deployed and operated cloud-native workloads on Azure App Services, Functions, and AKS using Docker, Kubernetes, and CI/CD pipelines, with observability via Elastic/Kibana, Kusto, New Relic, and quality governance through SonarQube.',
      'Delivered dozens of high-impact features with zero critical production defects by enforcing unit tests, code reviews, CI/CD quality gates, and disciplined release practices.',
      'Increased engineering productivity by 30–50% through AI-assisted development, SonarQube automation, and test-driven development (TDD).',
      'Owned the full SDLC, from requirements analysis and architecture to development, deployment, and production support.',
      'Collaborated cross-functionally with Product, UX, QA, and DevOps teams in Agile/Scrum to deliver predictable monthly production releases.'
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
    title: 'IBM: Advanced RAG with Vector Databases and Retrievers',
    link: 'https://www.credly.com/badges/0abd2fd9-10c2-4907-a13e-f52358b3bc35'
  },
  {
    title: 'IBM: Build RAG Applications',
    link: 'https://www.credly.com/badges/3619acd1-dbe4-415e-8ab8-50b6eee6bc4b'
  },
  {
    title: 'IBM: Develop Generative AI Applications',
    link: 'https://www.credly.com/badges/23ddde6f-978c-4551-a438-c8a3e0aebd09'
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
    title: 'AI RAG Chatbot — PDF Q&A with IBM watsonx.ai',
    summary: "A Retrieval-Augmented Generation (RAG) chatbot that lets users upload any PDF document and ask natural-language questions against it — grounded in the document's actual content, not hallucinated guesses.",
    purpose:
      'Built to demonstrate end-to-end RAG pipeline engineering: document ingestion, semantic chunking, vector embedding, similarity retrieval, and LLM-powered answer synthesis — using IBM watsonx.ai and LangChain as the AI backbone.',
    tech: ['Python', 'LangChain', 'IBM watsonx.ai', 'Mistral-Medium LLM', 'IBM Slate-125m Embeddings', 'ChromaDB', 'Gradio', 'PyPDFLoader'],
    githubLink: 'https://github.com/uongseyha/ai-rag-chatbot'
  },
  {
    title: 'AI RAG YouTube Summarizer',
    summary: 'A Retrieval-Augmented Generation (RAG) application that extracts YouTube video transcripts and uses IBM WatsonX foundation models to generate concise summaries and answer natural-language questions about video content.',
    purpose:
      'Built to demonstrate RAG pipeline engineering for video content: transcript extraction via youtube-transcript-api, text chunking, vector embedding with IBM Slate-30m, FAISS similarity retrieval, and LLM-powered summarization and Q&A using IBM WatsonX Mistral-Medium — all served through a Gradio web UI.',
    tech: ['Python', 'LangChain', 'IBM watsonx.ai', 'Mistral-Medium LLM', 'IBM Slate-30m Embeddings', 'FAISS', 'Gradio', 'youtube-transcript-api'],
    githubLink: 'https://github.com/uongseyha/ai-youtube-summarizer'
  }
];
