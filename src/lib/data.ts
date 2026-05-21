import { type PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mario Araya",
    title: "Software Developer — CI/CD & Build Engineering | C# / .NET",
    email: "arayaroyo686@gmail.com",
    location: "San José, Costa Rica",
    bio: "Software Developer with 3+ years specializing in CI/CD and Build Engineering across C#, .NET Framework 4.8, and .NET Core ecosystems. Hands-on experience configuring GitHub Actions workflows, managing .sln/.csproj solutions with MSBuild and NuGet, and authoring PowerShell automation scripts. Proven track record migrating legacy pipelines to cloud-native platforms, integrating SAST tooling for shift-left security, and resolving complex build failures through root-cause analysis. Agile practitioner using Jira for PBI tracking and Git/GitHub for branching, Pull Request reviews, and conflict resolution across distributed teams.",
    avatar: "/images/Profile.JPG",
    resume: "/MarioArayaCV.pdf",
    social: {
      github: "https://github.com/mariocodecr",
      linkedin: "https://www.linkedin.com/in/mariocodecr/"
    },
    professional: {
      yearsOfExperience: 3,
      workTypes: ["Remote", "Hybrid", "Freelance"],
      availability: "Available for full-time opportunities",
      preferredRoles: ["Software Developer", "Build & CI/CD Engineer", "Full-Stack .NET Developer"],
      languages: {
        spanish: "Native",
        english: "Advanced (B2+)"
      },
      workPreferences: {
        remoteOk: true,
        timezone: "CST (GMT-6)",
        contractTypes: ["Full-time", "Contract", "Part-time"]
      }
    }
  },
  experience: [
    {
      id: "codingraph-2026",
      company: "Codingraph",
      role: "Full-Stack Software Developer",
      duration: "5 months",
      startDate: "Jan 2026",
      description: "Architecting full-stack .NET solutions with automated CI/CD pipelines, integrating shift-left security practices and optimizing performance for thousands of active users.",
      keyAchievements: [
        "Automated build and deployment workflows to near-zero manual effort by configuring GitHub Actions CI/CD pipelines for .NET solutions with containerized Docker artifacts",
        "Reduced application load times 30% (measured by K6 benchmarks) by refactoring .csproj dependencies, optimizing T-SQL queries, and tuning Entity Framework data-access layers",
        "Strengthened shift-left security posture by integrating JWT authentication, RBAC, and NUnit/Moq regression coverage into CI workflows following secure coding standards",
        "Boosted platform efficiency 25% for 2,000+ active users by architecting ASP.NET MVC features and REST APIs backed by SQL Server"
      ],
      technologies: ["C#", ".NET", "ASP.NET MVC", "REST APIs", "GitHub Actions", "Docker", "Entity Framework", "SQL Server", "T-SQL", "NUnit", "Moq", "K6", "JWT", "RBAC"],
      workType: "Remote"
    },
    {
      id: "banco-nacional-2025",
      company: "Banco Nacional",
      role: "IT Operations & Cloud Monitoring Engineer",
      duration: "7 months",
      startDate: "Feb 2025",
      endDate: "Aug 2025",
      description: "Monitored high-availability banking systems through enterprise observability tooling, diagnosing performance bottlenecks and resolving mission-critical incidents under secure engineering standards.",
      keyAchievements: [
        "Accelerated root-cause analysis on high-availability banking systems by diagnosing SQL Server and Oracle bottlenecks through query tuning, execution-plan analysis, and parallel workload reviews",
        "Improved operational visibility across distributed teams by deploying Dynatrace and Grafana dashboards with alerting rules over Azure, Linux, and Windows environments",
        "Resolved mission-critical incidents by executing structured response procedures aligned with secure engineering and source-control standards"
      ],
      technologies: ["SQL Server", "Oracle", "Dynatrace", "Grafana", "Azure", "Linux", "Windows", "Query Tuning", "Incident Response"],
      workType: "Remote"
    },
    {
      id: "only-dust-2024-2025",
      company: "Only Dust",
      role: "Full-Stack Software Developer (Freelance)",
      duration: "16 months",
      startDate: "May 2024",
      endDate: "Aug 2025",
      description: "Delivered scalable .NET components to distributed systems for an international open-source platform based in Paris, leading PR reviews and orchestrating GitFlow workflows.",
      keyAchievements: [
        "Reduced security vulnerabilities 30% by leading structured Pull Request reviews, peer code audits, and enforcing engineering quality gates with unit testing coverage",
        "Delivered on-time releases for international contributors by orchestrating Git branching strategies, merge conflict resolution, and Pull Request workflows on GitHub",
        "Improved transaction throughput 25% by developing scalable .NET components applying SOLID, Repository, and Service Layer patterns across distributed systems"
      ],
      technologies: [".NET", "C#", "Git", "GitHub", "GitFlow", "SOLID", "Repository Pattern", "Service Layer", "Unit Testing"],
      teamSize: "International distributed contributors",
      workType: "Freelance"
    },
    {
      id: "devlive-2024-2025",
      company: "Devlive",
      role: "Software Engineer",
      duration: "6 months",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      description: "Architected ASP.NET backend APIs and streamlined cloud deployments using Docker and CI/CD pipelines under Agile/Scrum methodology, while optimizing SQL Server reporting performance.",
      keyAchievements: [
        "Reduced technical debt across web applications by architecting ASP.NET backend APIs and managing .sln/.csproj structures using MVC, Factory, and Repository patterns",
        "Streamlined cloud deployments across the SDLC by containerizing services with Docker, configuring CI/CD pipelines, and tracking PBIs in Jira during Agile/Scrum ceremonies",
        "Optimized SQL Server reporting performance by refactoring queries and improving schema design, cutting response times measurably"
      ],
      technologies: ["ASP.NET", "C#", ".NET", "Docker", "CI/CD", "SQL Server", "Jira", "Agile/Scrum", "MVC", "Factory Pattern", "Repository Pattern"],
      workType: "Remote"
    }
  ],
  projects: [
    {
      id: "safetrust",
      name: "SafeTrust",
      description: "Developed secure backend infrastructure and API endpoints for a P2P financial transaction platform with authentication and role-based access control systems.",
      technologies: ["Backend Development", "API Design", "Authentication", "Security", "Database"],
      githubUrl: "https://github.com/safetrustcr/backend-SafeTrust",
      category: "backend",
      pullRequests: [
        {
          id: "safetrust-security",
          title: "Authentication & Role-Based Access Control",
          description: "Built comprehensive authentication system with role-based access control, ensuring data security and compliance for financial transactions.",
          technologies: ["Authentication", "Security", "API Development", "Database Design"],
          url: "#"
        },
        {
          id: "safetrust-api",
          title: "P2P Transaction API Endpoints",
          description: "Developed secure API endpoints for peer-to-peer financial transactions, implementing proper validation and security measures.",
          technologies: ["API Development", "Security", "Backend", "Financial Systems"],
          url: "#"
        }
      ]
    },
    {
      id: "starshop",
      name: "StarShop",
      description: "Architected scalable backend for a full-featured e-commerce platform with robust product and inventory management APIs, integrated with secure payment processing.",
      technologies: ["Backend Architecture", "E-commerce", "Payment Integration", "API Development", "Database Design"],
      githubUrl: "https://github.com/StarShopCr/StarShop-Backend",
      category: "backend",
      pullRequests: [
        {
          id: "starshop-architecture",
          title: "Scalable Backend Architecture",
          description: "Designed and implemented scalable backend architecture for e-commerce platform with robust product and inventory management.",
          technologies: ["Architecture", "Scalability", "Database Design", "API Development"],
          url: "#"
        },
        {
          id: "starshop-payments",
          title: "Secure Payment Processing Integration",
          description: "Integrated secure payment processing systems with user authentication to ensure safe transactions and data protection.",
          technologies: ["Payment Processing", "Security", "Authentication", "Integration"],
          url: "#"
        }
      ]
    },
    {
      id: "gostarkme",
      name: "GoStarkMe",
      description: "Developed backend services for a crowdfunding platform, managing projects and donations with APIs for donation processing and real-time campaign tracking.",
      technologies: ["Crowdfunding", "Real-time Systems", "API Development", "Notifications", "Backend Services"],
      githubUrl: "https://github.com/GoStarkMe/GoStarkMe-Backend",
      category: "backend",
      pullRequests: [
        {
          id: "gostarkme-donations",
          title: "Donation Processing API",
          description: "Built comprehensive donation processing system with real-time tracking and campaign management features.",
          technologies: ["API Development", "Real-time Systems", "Payment Processing", "Database"],
          url: "#"
        },
        {
          id: "gostarkme-notifications",
          title: "Real-time Campaign Tracking & Notifications",
          description: "Implemented real-time campaign tracking with notification systems to keep donors and creators updated on progress.",
          technologies: ["Real-time Systems", "Notifications", "Tracking", "WebSockets"],
          url: "#"
        }
      ]
    },
    {
      id: "volun-chain",
      name: "VolunChain",
      description: "Blockchain-based volunteer management platform with decentralized identity and contribution tracking.",
      technologies: ["Node.js", "TypeScript", "Express", "NestJS", "PostgreSQL", "Blockchain"],
      githubUrl: "https://github.com/VolunChain/VolunChain-Backend",
      category: "backend",
      pullRequests: [
        {
          id: "volunchain-81",
          title: "Photo Controller Implementation",
          description: "Built comprehensive image management system with upload/retrieval, validations, and error handling. Enhanced engagement by 65%.",
          technologies: ["Node.js", "TypeScript", "Express", "NestJS", "File Storage", "REST API"],
          url: "https://github.com/VolunChain/VolunChain-Backend/pull/81"
        },
        {
          id: "volunchain-32",
          title: "Documentation Tool Integration",
          description: "Integrated auto documentation generator with CI/CD pipeline. Reduced onboarding time by 60% and increased team productivity by 40%.",
          technologies: ["Node.js", "TypeScript", "Swagger", "OpenAPI", "CI/CD"],
          url: "https://github.com/VolunChain/VolunChain-Backend/pull/32"
        }
      ]
    },
    {
      id: "star-shop",
      name: "StarShop",
      description: "E-commerce platform with advanced product management, attributes, and variants system for customizable products.",
      technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/StarShopCr/StarShop-Backend",
      category: "backend",
      pullRequests: [
        {
          id: "starshop-44",
          title: "Fix Missing Validation Attribute",
          description: "Added missing DTO validation decorators and comprehensive tests. Reduced invalid requests by 85% and improved backend reliability.",
          technologies: ["Node.js", "TypeScript", "NestJS", "REST API"],
          url: "https://github.com/StarShopCr/StarShop-Backend/pull/44"
        },
        {
          id: "starshop-22",
          title: "Attributes & Variants APIs",
          description: "Designed database models and CRUD APIs for product attributes/variants. Improved catalog flexibility by 70%.",
          technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "REST API"],
          url: "https://github.com/StarShopCr/StarShop-Backend/pull/22"
        }
      ]
    },
    {
      id: "safe-trust",
      name: "SafeTrust",
      description: "Blockchain escrow platform providing secure transactions with smart contract integration and GraphQL APIs.",
      technologies: ["Hasura", "PostgreSQL", "GraphQL", "Docker", "Blockchain"],
      githubUrl: "https://github.com/safetrustcr/backend-SafeTrust",
      category: "blockchain",
      pullRequests: [
        {
          id: "safetrust-39",
          title: "Escrow Transactions Implementation",
          description: "Designed database tables and integrated with Trustless API for escrow tracking. Reduced risk by 90% and faster audits by 60%.",
          technologies: ["Hasura", "PostgreSQL", "GraphQL", "Docker"],
          url: "https://github.com/safetrustcr/backend-SafeTrust/pull/39"
        },
        {
          id: "safetrust-33",
          title: "Dockerize Hasura Command",
          description: "Dockerized Hasura setup with CI/CD integration. Cut onboarding time by 70% and reduced deployment errors by 80%.",
          technologies: ["Docker", "Hasura", "PostgreSQL"],
          url: "https://github.com/safetrustcr/backend-SafeTrust/pull/33"
        }
      ]
    },
    {
      id: "tree-byte",
      name: "TreeByte",
      description: "Environmental NFT platform with automated coupon generation using Soroban blockchain and IPFS storage.",
      technologies: ["Node.js", "TypeScript", "Express", "Soroban", "IPFS", "PostgreSQL"],
      githubUrl: "https://github.com/Tree-Byte-org/TreeByte-Backend",
      category: "blockchain",
      pullRequests: [
        {
          id: "treebyte-86",
          title: "NFT Coupon Generator",
          description: "Implemented automated NFT coupon system with Soroban and IPFS integration. Reduced issuance time from 10-15 minutes to under 5 seconds.",
          technologies: ["Node.js", "TypeScript", "Express", "Joi", "Jest", "Soroban", "IPFS", "PostgreSQL", "Docker"],
          url: "https://github.com/Tree-Byte-org/TreeByte-Backend/pull/86"
        }
      ]
    },
    {
      id: "revolutionary-farmers",
      name: "Revolutionary Farmers",
      description: "Decentralized marketplace for farmers with modern web interface and blockchain-powered backend infrastructure.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/Crypto-Jaguars/Revo-Marketplace",
      category: "fullstack",
      pullRequests: [
        {
          id: "revo-73",
          title: "Hero Section Component",
          description: "Built engaging hero section with animations and CTAs. Increased engagement by 65% and improved first impressions by 50%.",
          technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Jest"],
          url: "https://github.com/Crypto-Jaguars/Revo-Marketplace/pull/73"
        },
        {
          id: "revo-6",
          title: "PostgreSQL with Docker",
          description: "Added docker-compose with PostgreSQL and comprehensive documentation. Reduced onboarding time by 70% and database errors by 80%.",
          technologies: ["Docker", "PostgreSQL", "Node.js", "TypeScript"],
          url: "https://github.com/Crypto-Jaguars/Revo-Backend/pull/6"
        }
      ]
    },
    {
      id: "aqua-stark",
      name: "Aqua Stark",
      description: "Web3 game on StarkNet where players collect, breed, and evolve fish in a decentralized ecosystem. Features genetics-based mechanics, customizable aquariums, and true asset ownership through Cairo smart contracts.",
      technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Cairo", "StarkNet", "Dojo Engine", "pnpm Workspaces"],
      githubUrl: "https://github.com/mariocodecr/Aqua-Stark",
      liveUrl: "https://aqua-stark.gitbook.io/aqua-stark/",
      category: "blockchain",
      pullRequests: [
        {
          id: "aqua-stark-breeding",
          title: "Fish Breeding & Evolution System",
          description: "Designed genetics-based breeding mechanics enabling unique fish lineages with on-chain ownership backed by Cairo smart contracts.",
          technologies: ["Cairo", "StarkNet", "Dojo Engine", "TypeScript"],
          url: "#"
        },
        {
          id: "aqua-stark-marketplace",
          title: "Decentralized Marketplace",
          description: "Implemented a decentralized marketplace for trading fish and aquarium decorations with verifiable asset authenticity and scarcity.",
          technologies: ["React", "Vite", "TailwindCSS", "Cairo", "StarkNet"],
          url: "#"
        }
      ]
    },
    {
      id: "offer-hub",
      name: "Offer-Hub",
      description: "Decentralized freelance marketplace connecting professionals and clients worldwide, leveraging blockchain payments and smart contracts to remove intermediaries and reduce fees.",
      technologies: ["Next.js", "TypeScript", "Rust", "NestJS", "Supabase", "Stellar", "TailwindCSS"],
      githubUrl: "https://github.com/mariocodecr/offer-hub",
      category: "blockchain",
      pullRequests: [
        {
          id: "offer-hub-backend",
          title: "Backend APIs with Supabase Integration",
          description: "Built REST endpoints and database migrations on Supabase to power freelancer profiles, job postings, and bidding workflows.",
          technologies: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "REST API"],
          url: "#"
        },
        {
          id: "offer-hub-contracts",
          title: "Smart Contract Payment Integration",
          description: "Integrated Stellar-based smart contracts in Rust to enable trustless escrow and crypto payments between freelancers and clients.",
          technologies: ["Rust", "Stellar", "Smart Contracts", "Next.js"],
          url: "#"
        }
      ]
    },
    {
      id: "expenses-tracker",
      name: "Expenses Tracker",
      description: "Full-stack expenses tracking application with categorization, real-time statistics, and responsive design. Dockerized FastAPI backend paired with a Next.js frontend.",
      technologies: ["FastAPI", "Python", "Next.js", "TypeScript", "TailwindCSS", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/mariocodecr/expenses-tracker",
      category: "fullstack",
      pullRequests: [
        {
          id: "expenses-tracker-api",
          title: "FastAPI Backend with CRUD & Categorization",
          description: "Implemented expense CRUD endpoints with category management and aggregated statistics, exposed through a typed FastAPI layer.",
          technologies: ["FastAPI", "Python", "PostgreSQL", "REST API"],
          url: "#"
        },
        {
          id: "expenses-tracker-ui",
          title: "Responsive Dashboard with Real-Time Updates",
          description: "Built a responsive Next.js dashboard with TailwindCSS, delivering real-time expense summaries and category breakdowns.",
          technologies: ["Next.js", "TypeScript", "TailwindCSS", "Docker"],
          url: "#"
        }
      ]
    },
    {
      id: "minibank",
      name: "MiniBank",
      description: "Production-grade digital banking platform with event-driven microservices, multi-currency operations, real-time FX processing, double-entry accounting, and security-first OIDC authentication.",
      technologies: ["Java 21", "Spring Boot", "Next.js", "TypeScript", "Apache Kafka", "PostgreSQL", "Redis", "Keycloak", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/mariocodecr/MiniBank",
      category: "fullstack",
      pullRequests: [
        {
          id: "minibank-2",
          title: "Accounts Service with Clean Architecture",
          description: "Implemented the complete Accounts Service applying Clean/Hexagonal Architecture with comprehensive unit and integration test coverage.",
          technologies: ["Java 21", "Spring Boot", "PostgreSQL", "JUnit", "Testcontainers"],
          url: "https://github.com/mariocodecr/MiniBank/pull/2"
        },
        {
          id: "minibank-3",
          title: "Payment Processing Module",
          description: "Built event-driven payment flows with Kafka, supporting cross-currency saga orchestration and outbox/inbox patterns for reliable delivery.",
          technologies: ["Java 21", "Spring Boot", "Apache Kafka", "Apache Avro", "Saga Pattern"],
          url: "https://github.com/mariocodecr/MiniBank/pull/3"
        }
      ]
    },
    {
      id: "gym-os",
      name: "GymOS",
      description: "Web platform to manage CrossFit boxes and functional gyms — covering members, payments, expenses, attendance, workouts, rankings, and public content. Designed to evolve into a multi-tenant SaaS.",
      technologies: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "React"],
      githubUrl: "https://github.com/mariocodecr/gym-os",
      category: "fullstack",
      pullRequests: [
        {
          id: "gym-os-members",
          title: "Members & Payments Management",
          description: "Implemented member lifecycle, payment registration, and financial control flows to digitalize gym operations and improve retention.",
          technologies: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
          url: "#"
        },
        {
          id: "gym-os-wod",
          title: "WOD & Rankings Module",
          description: "Built workout-of-the-day publishing and athlete result tracking with leaderboards, giving coaches visibility and athletes a progression view.",
          technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
          url: "#"
        }
      ]
    },
    {
      id: "huellas-vivas",
      name: "Huellas Vivas",
      description: "Donation platform that helps raise funds for pets and animals requiring medical treatment or special care. Includes blockchain-based escrow logic, real-time progress tracking, and community interaction.",
      technologies: ["Next.js", "TypeScript", "NestJS", "TailwindCSS", "PostgreSQL", "Stellar"],
      githubUrl: "https://github.com/mariocodecr/HuellasVivas",
      category: "fullstack",
      pullRequests: [
        {
          id: "huellas-vivas-campaigns",
          title: "Campaign Creation & Donation Flow",
          description: "Built end-to-end donation campaigns with photo/video evidence, target tracking, and automatic completion when goals are reached.",
          technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
          url: "#"
        },
        {
          id: "huellas-vivas-escrow",
          title: "Stellar-Based Escrow & Community Interaction",
          description: "Integrated blockchain escrow for secure donations and implemented threaded comments to drive engagement around each animal's case.",
          technologies: ["Stellar", "NestJS", "Next.js", "TailwindCSS"],
          url: "#"
        }
      ]
    },
    {
      id: "core-banking-lite",
      name: "Core Banking Lite",
      description: "Enterprise-grade banking platform with JWT auth, role-based access (Admin/Advisor/Auditor/Client), idempotent multi-currency transfers using BCCR exchange rates, and ETF/mutual fund investments backed by real market data.",
      technologies: ["Java 21", "Spring Boot 3", "Next.js 15", "React 19", "TypeScript", "PostgreSQL 16", "Redis 7", "TanStack Query", "Testcontainers"],
      githubUrl: "https://github.com/mariocodecr/Core-Banking-Lite",
      category: "fullstack",
      pullRequests: [
        {
          id: "core-banking-1",
          title: "Investment Module & Production Hardening",
          description: "Delivered the ETF/mutual fund investment module with CLIENT role, BCCR/Alpha Vantage exchange rates, Redis caching, and production-grade observability.",
          technologies: ["Java 21", "Spring Boot 3", "PostgreSQL", "Redis", "Alpha Vantage API"],
          url: "https://github.com/mariocodecr/Core-Banking-Lite/pull/1"
        },
        {
          id: "core-banking-3",
          title: "Integration Test Hardening",
          description: "Fixed insufficient-balance integration test to respect daily transfer limits, improving reliability of the CI pipeline.",
          technologies: ["JUnit", "Testcontainers", "Spring Boot", "CI/CD"],
          url: "https://github.com/mariocodecr/Core-Banking-Lite/pull/3"
        }
      ]
    }
  ],
  skills: {
    frontend: [
      { name: "React", level: "Advanced", yearsUsed: 2, context: "Built multiple production web applications with complex UI components" },
      { name: "Angular", level: "Advanced", yearsUsed: 2, context: "Developed enterprise-level applications with reactive programming" },
      { name: "TypeScript", level: "Advanced", yearsUsed: 2, context: "Implemented type-safe architectures across mobile and web projects" },
      { name: "JavaScript", level: "Advanced", yearsUsed: 2, context: "Core language for frontend and backend development" }
    ],
    backend: [
      { name: "Java", level: "Advanced", yearsUsed: 2, context: "Built scalable backend systems with Spring Boot framework" },
      { name: "C#", level: "Advanced", yearsUsed: 2, context: "Developed enterprise applications using .NET framework" },
      { name: ".NET", level: "Advanced", yearsUsed: 2, context: "Created robust web applications and APIs" },
      { name: "Spring Boot", level: "Advanced", yearsUsed: 2, context: "Architected microservices and RESTful APIs" },
      { name: "REST APIs", level: "Advanced", yearsUsed: 2, context: "Designed and implemented secure API endpoints" }
    ],
    databases: [
      { name: "SQL Server", level: "Advanced", yearsUsed: 2, context: "Managed enterprise databases and complex queries" },
      { name: "MongoDB", level: "Intermediate", yearsUsed: 1, context: "Implemented NoSQL solutions for flexible data storage" },
      { name: "SQL", level: "Advanced", yearsUsed: 2, context: "Expert in database design, queries, and performance optimization" },
      { name: "Supabase", level: "Intermediate", yearsUsed: 1, context: "Built modern applications with real-time features" },
      { name: "Firebase", level: "Intermediate", yearsUsed: 1, context: "Implemented authentication and real-time database features" }
    ],
    tools: [
      { name: "AWS", level: "Intermediate", yearsUsed: 1, context: "Deployed and managed cloud infrastructure" },
      { name: "Azure", level: "Intermediate", yearsUsed: 1, context: "Cloud services and enterprise application deployment" },
      { name: "Git", level: "Advanced", yearsUsed: 2, context: "Version control and collaborative development workflows" },
      { name: "Mobile Development", level: "Advanced", yearsUsed: 1, context: "Built healthcare mobile apps with scheduling features" },
      { name: "System Monitoring", level: "Advanced", yearsUsed: 1, context: "Enterprise-level system monitoring and incident response" }
    ]
  },
  testimonials: [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "Product Manager", 
      company: "TechStart Inc",
      text: "Mario delivered exceptional work on our marketplace platform. His attention to detail and ability to translate complex requirements into elegant solutions was impressive. The system he built reduced our error rates by 90% and significantly improved user engagement.",
      project: "Offer-Hub"
    },
    {
      id: "testimonial-2", 
      name: "David Chen",
      role: "CTO",
      company: "InnovateNow",
      text: "Working with Mario was a game-changer for our project. He not only wrote clean, maintainable code but also provided valuable architectural insights. His expertise in React and Node.js helped us launch ahead of schedule.",
      project: "E-commerce Platform"
    },
    {
      id: "testimonial-3",
      name: "Elena Rodriguez", 
      role: "Lead Developer",
      company: "BlockchainCorp",
      text: "Mario's technical skills are outstanding, but what sets him apart is his problem-solving approach. He tackled complex blockchain integrations with ease and delivered a user-friendly interface that our clients love.",
      project: "NFT Marketplace"
    }
  ]
};