import { Component } from '@angular/core';

interface TimelineRole {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface Metric {
  label: string;
  value: string;
  detail: string;
}

interface PortfolioItem {
  title: string;
  type: string;
  status: string;
  blurb: string;
}

interface LiveDemoProject {
  title: string;
  summary: string;
  purpose: string;
  tech: string[];
  link: string;
}

interface Certification {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly name = 'Seyha Uong';
  protected readonly role = 'Senior .NET Full Stack Developer';

  protected readonly quickFacts = [
    //'10+ years building enterprise software',
    'Cloud-native SaaS at 100K+ user scale',
    'C#, Python, .NET 10, Angular 21, MS Azure, SQL/NO-SQL, AI-assisted engineering, Vibe Coding'
  ];

  protected readonly metrics: Metric[] = [
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

  protected readonly journey: TimelineRole[] = [
    {
      title: 'Agentic AI Engineer | Open new opportunities | Open to relocate',
      company: 'Freelance',
      location: 'Plainfield, New Jersey',
      period: 'Jan 2026 - Present',
      bullets: [
        'Built AI-integrated demo platform using .NET 10, Angular 21, SQL Server, Azure',
        'Developed professional SPA portfolio with Angular 21',
        'Studying AI/ML fundamentals and LLM frameworks',
        'Building autonomous AI agents using Agentic AI tools',
        'Preparing certifications: IBM, Microsoft, Google AI'
      ]
    },{
      title: 'Senior Software Engineer',
      company: 'GEP Worldwide',
      location: 'Clark, New Jersey',
      period: 'Mar 2020 - Dec 2025',
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
      title: '.NET Developer',
      company: 'BiKay',
      location: 'Phnom Penh, Cambodia',
      period: 'Oct 2016 - Oct 2018',
      bullets: [
        'Optimized backend logic and SQL queries for a Music Streaming portal, resulting in a 25% reduction in page load times and improved database responsiveness using Entity Framework Core and LINQ.',
        'Engineered scalable REST APIs using ASP.NET Core and Entity Framework, reducing data retrieval latency by 20% through optimized LINQ queries and asynchronous programming.',
        'Streamlined the deployment pipeline by integrating automated unit tests using xUnit and Moq, achieving 80% code coverage for mission-critical services and ensuring stable, bug-free releases within a CI/CD environment'
      ]
    }
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'AI',
      items: ['GitHub Copilot','Vibe Coding', 'Claude', 'Cursor']
    },
    {
      title: 'Backend',
      items: ['C#','Python', '.NET 10', 'ASP.NET MVC', 'Web API / RESTFul APIs', 'Entity Framework', 'ORM', 'Dapper', 'LINQ', 'AutoMapper']
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

  protected readonly portfolioPipeline: PortfolioItem[] = [
    // {
    //   title: 'Enterprise Procurement Insights',
    //   type: 'Generative AI',
    //   status: 'Preparing architecture narrative',
    //   blurb: 'Planned deep dive into high-scale microservices patterns, observability, and performance wins.'
    // }
  ];

  protected readonly liveDemoProject: LiveDemoProject = {
    title: 'E-Commerce Shopping Cart Demo',
    summary: 'This project is a small demo of an E-Commerce Shopping Cart application.',
    purpose:
      'It is specifically designed for demonstration purposes to showcase modern web development practices and technologies.',
    tech: ['.NET 10', 'Angular 21', 'EF Core', 'SQL Server', 'GitHub', 'Docker', 'Redis', 'MS Azure'],
    link: 'https://shopnet2k6.azurewebsites.net/'
  };

  protected readonly certifications: Certification[] = [
    {
      title: 'Intro to AI Agents and Agentic AI',
      link: 'https://www.udemy.com/certificate/UC-ecb76520-7c9d-4423-9d47-d8d8d991727f/'
    },
    {
      title: '.NET Microservices with Azure DevOps & AKS | Basic to Master',
      link: 'https://www.udemy.com/certificate/UC-b419f7f6-7449-4eb9-9b3d-1eb192c1ca6a/'
    }
  ];

  protected readonly education = [
    'Master of Computer Science - Maharishi University of Management (Fairfield, Iowa)',
    'Bachelor of Management Information Systems - SETEC Institute (Phnom Penh, Cambodia)'
  ];
}
