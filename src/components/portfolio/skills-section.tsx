"use client";

import * as React from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";
import { LazySection } from "@/components/optimizations/lazy-section";
import { usePerformance } from "@/components/optimizations/performance-provider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: Array<{ name: string; level?: string | number }>;
}

// Static skill categories - optimized for performance
const getSkillCategories = () => [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern web interfaces and user experiences",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: portfolioData.skills.frontend,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Server-side logic and API development",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
    skills: portfolioData.skills.backend,
  },
  {
    id: "databases",
    title: "Databases",
    description: "Data storage and management solutions",
    icon: Database,
    color: "from-purple-500/20 to-violet-500/20",
    skills: portfolioData.skills.databases || [],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Development workflow and productivity tools",
    icon: Wrench,
    color: "from-orange-500/20 to-red-500/20",
    skills: portfolioData.skills.tools,
  },
];

// Optimized skill card component with performance improvements
const SkillCard = React.memo(({ category, shouldReduceMotion }: { 
  category: SkillCategory; 
  shouldReduceMotion: boolean;
}) => {
  const IconComponent = category.icon;
  
  return (
    <Card 
      className="relative overflow-hidden group transition-transform duration-200 hover:scale-[1.02]"
      data-animate="skill-card"
    >
      {/* Simplified background effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 transition-colors duration-200">
            <IconComponent className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg text-foreground transition-colors duration-200">
              {category.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {category.description}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative pt-0">
        {category.skills.length > 0 ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex: number) => (
                <Badge
                  key={`${category.id}-${skill.name}-${skillIndex}`}
                  variant="secondary"
                  className={`glassmorphism border-primary/20 transition-all duration-200 ${
                    shouldReduceMotion ? '' : 'hover:bg-primary/10 hover:scale-105'
                  }`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-primary font-semibold">
                {category.skills.length}
              </span>
              technolog{category.skills.length !== 1 ? 'ies' : 'y'}
            </p>
          </div>
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            <Layers className="h-6 w-6 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No skills listed</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => {
  // Custom comparison for better memoization
  return (
    prevProps.category.id === nextProps.category.id &&
    prevProps.category.skills.length === nextProps.category.skills.length &&
    prevProps.shouldReduceMotion === nextProps.shouldReduceMotion
  );
});

SkillCard.displayName = 'SkillCard';

export function SkillsSection() {
  const { shouldReduceMotion, isSlowDevice } = usePerformance();
  
  // Memoize skill categories to prevent unnecessary recalculations
  const skillCategories = React.useMemo(() => getSkillCategories(), []);
  
  const totalSkills = React.useMemo(() => {
    return skillCategories.reduce((total, category) => total + category.skills.length, 0);
  }, [skillCategories]);

  // Simplified animations for better performance
  React.useEffect(() => {
    if (shouldReduceMotion || isSlowDevice) return;

    const ctx = gsap.context(() => {
      // Faster, simpler animations
      gsap.from("[data-animate='section-title']", {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "[data-animate='section-title']",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      gsap.from("[data-animate='skill-card']", {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "[data-animate='skills-grid']",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, [shouldReduceMotion, isSlowDevice]);

  return (
    <LazySection className="section-padding relative overflow-hidden" threshold={0.2}>
      <section id="skills">
        {/* Background decorations - simplified for performance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4" data-animate="section-title">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise across{" "}
                <span className="text-accent font-semibold">
                  {totalSkills}
                </span>{" "}
                technologies, tools, and frameworks.
              </p>
            </div>

            {/* Skills Grid - Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-animate="skills-grid">
              {skillCategories.map((category) => (
                <SkillCard 
                  key={category.id} 
                  category={category} 
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            {/* Skills Highlights - Optimized */}
            <div className="glass-effect rounded-2xl p-6 lg:p-10 border border-white/10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  Always Learning
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Constantly Evolving Skillset
                </h3>
                
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest technologies. 
                  My skill set evolves with industry trends, ensuring I can deliver modern, efficient, 
                  and scalable solutions that meet today&apos;s development standards.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                  {skillCategories.map((category) => (
                    <div key={`stat-${category.id}`} className="text-center space-y-2">
                      <div className="text-2xl lg:text-3xl font-bold text-primary">
                        {category.skills.length}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.title.split(' ')[0]} Skills
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazySection>
  );
}