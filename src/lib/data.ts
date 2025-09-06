import { type PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mario Araya",
    title: "Software Engineer",
    email: "arayaroyo686@gmail.com",
    location: "Costa Rica",
    bio: "Junior Software Engineer with 2+ years of experience building mobile and web applications. Proven ability to design and deliver scalable full stack solutions, with a strong foundation in system architecture, database design, API development, and cloud technologies. Active open source contributor with a focus on creating impactful and high-quality software projects.",
    avatar: "/images/Profile.JPG",
    resume: "/MarioArayaCV.pdf",
    social: {
      github: "https://github.com/mariocodecr",
      linkedin: "https://www.linkedin.com/in/mariocodecr/"
    },
    professional: {
      yearsOfExperience: 2,
      workTypes: ["Remote", "Hybrid", "Freelance"],
      availability: "Available for full-time opportunities",
      preferredRoles: ["Full-Stack Developer", "Frontend Developer", "Software Engineer"],
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
      id: "banco-nacional-2025",
      company: "Banco Nacional",
      role: "IT Operations & Monitoring Specialist",
      duration: "7 months",
      startDate: "Feb 2025",
      endDate: "Aug 2025",
      description: "Monitored critical banking systems and ensured high availability through enterprise-level monitoring tools, supporting anomaly detection and incident response.",
      keyAchievements: [
        "Maintained 99.9% uptime for critical banking systems",
        "Improved system performance through SQL-based analysis and monitoring",
        "Enhanced decision-making efficiency through anomaly detection systems",
        "Reduced incident response time by implementing proactive monitoring"
      ],
      technologies: ["SQL", "Enterprise Monitoring Tools", "Incident Response", "System Analysis"],
      teamSize: "5-10 specialists",
      workType: "Remote"
    },
    {
      id: "devlive-2024-2025",
      company: "Devlive",
      role: "Software Developer",
      duration: "6 months",
      startDate: "Aug 2024",
      endDate: "Jan 2025",
      description: "Built and optimized features for multiple web applications, refactored legacy codebases applying SOLID principles, and delivered full stack solutions in collaboration with cross-functional teams.",
      keyAchievements: [
        "Improved load times and user experience by 30%",
        "Reduced technical debt and increased maintainability by 40%",
        "Ensured 100% alignment with business requirements",
        "Accelerated release cycles by 20% through efficient development practices"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Full Stack Development", "Legacy Refactoring"],
      teamSize: "3-8 developers",
      workType: "Remote"
    },
    {
      id: "codingraph-2023-2024",
      company: "Codingraph",
      role: "Mobile & Web Developer",
      duration: "8 months",
      startDate: "Dec 2023",
      endDate: "Jul 2024",
      description: "Built and optimized e-commerce platforms handling hundreds of daily transactions, and designed a healthcare mobile app with scheduling and communication features.",
      keyAchievements: [
        "Enhanced e-commerce platform stability and user retention",
        "Reduced appointment conflicts by 35% in healthcare mobile app",
        "Handled hundreds of daily transactions with zero downtime",
        "Delivered mobile and web solutions meeting complex business requirements"
      ],
      technologies: ["Mobile Development", "E-commerce", "Healthcare Apps", "JavaScript", "React"],
      teamSize: "2-6 developers",
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