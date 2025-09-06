// Portfolio TypeScript interfaces and types

export interface PullRequest {
  id: string;              // e.g., "offerhub-521"
  title: string;           // e.g., "Review System Integration with Backend"
  description: string;     // short what was solved / impact
  technologies: string[];  // e.g., ["Next.js", "TypeScript", "REST API", "Jest"]
  url?: string;            // GitHub PR link
}

export interface Project {
  id: string;                   // e.g., "offer-hub"
  name: string;                 // "Offer-Hub"
  description: string;          // short project overview
  technologies: string[];       // tech summary for the project
  githubUrl?: string;
  liveUrl?: string;
  pullRequests: PullRequest[];  // ~23 total distributed across projects
  category?: string;            // e.g., "frontend" | "backend" | "fullstack"
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsUsed: number;
  context: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  keyAchievements: string[];
  technologies: string[];
  teamSize?: string;
  workType: "Remote" | "Hybrid" | "On-site" | "Freelance";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  project?: string;
  avatar?: string;
  linkedinUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    location?: string;
    bio: string;
    avatar: string;
    resume?: string;
    social: {
      github: string;
      linkedin: string;
    };
    professional: {
      yearsOfExperience: number;
      workTypes: string[];
      availability: string;
      preferredRoles: string[];
      languages: {
        [key: string]: string;
      };
      workPreferences: {
        remoteOk: boolean;
        timezone: string;
        hourlyRate?: string;
        contractTypes: string[];
      };
    };
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
    databases: Skill[];
    tools: Skill[];
  };
  testimonials: Testimonial[];
}

// Filter types for the projects section
export interface ProjectFilters {
  activeProjectId: string;
  activeTech: string;
  searchText: string;
}

// Navigation item type
export interface NavItem {
  name: string;
  href: string;
}