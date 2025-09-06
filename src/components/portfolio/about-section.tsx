"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, Code2, Globe, Award } from "lucide-react";
import { portfolioData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceCardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.from(aboutRef.current, {
          x: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.from(statsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        experienceCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              x: index % 2 === 0 ? -40 : 40,
              opacity: 0,
              duration: 0.4,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !experienceCardsRef.current.includes(el)) {
      experienceCardsRef.current.push(el);
    }
  };

  const { personal } = portfolioData;

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div ref={aboutRef} className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Professional Journey
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {personal.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">{personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {personal.professional.yearsOfExperience}+ years experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {personal.professional.languages.english} English
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    {personal.professional.workTypes.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-4"
            >
              <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
                <div className="text-2xl font-bold text-primary mb-2">
                  {portfolioData.projects.length}+
                </div>
                <div className="text-xs text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
                <div className="text-2xl font-bold text-accent mb-2">
                  {portfolioData.testimonials.length}
                </div>
                <div className="text-xs text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
                <div className="text-2xl font-bold text-primary mb-2">
                  {personal.professional.yearsOfExperience}+
                </div>
                <div className="text-xs text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <Code2 className="h-6 w-6 text-accent" />
              Experience
            </h3>
            
            {portfolioData.experience.map((exp) => (
              <div
                key={exp.id}
                ref={addToRefs}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <div className="text-primary font-medium mb-2">
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {exp.teamSize}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full glass-effect border border-accent/20 text-accent">
                      {exp.workType}
                    </div>
                  </div>

                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {exp.keyAchievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="text-xs text-foreground/70 flex items-start gap-2"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-primary/20 to-accent/20 text-foreground/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect border border-white/10">
            <span className="text-sm text-muted-foreground">
              {personal.professional.availability}
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}