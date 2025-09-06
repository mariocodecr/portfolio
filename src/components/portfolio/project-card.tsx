"use client";

import * as React from "react";
import Link from "next/link";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project } from "@/types/portfolio";
import { gsap } from "gsap";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasMultiplePRs = project.pullRequests.length > 1;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Hover animations
  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        rotationX: 2,
        rotationY: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Expand animation
  React.useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }
  }, [isExpanded]);

  return (
    <Card 
      ref={cardRef}
      className={`card-hover card-glow glassmorphism border-primary/20 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-animate="card"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
            <CardDescription className="text-base">
              {project.description}
            </CardDescription>
          </div>
          <div className="flex gap-2 ml-4 flex-shrink-0">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2" data-animate="stagger">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs glassmorphism hover:bg-primary/10 hover:scale-110 transition-all duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {/* Pull Requests Section */}
        {project.pullRequests.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-muted-foreground">
                Pull Requests ({project.pullRequests.length})
              </h4>
              {hasMultiplePRs && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="ml-1 h-3 w-3" />
                    </>
                  ) : (
                    <>
                      Show All <ChevronDown className="ml-1 h-3 w-3" />
                    </>
                  )}
                </Button>
              )}
            </div>

            <div ref={contentRef} className="space-y-3">
              {/* Show first PR or all PRs based on expansion state */}
              {project.pullRequests
                .slice(0, isExpanded ? project.pullRequests.length : 1)
                .map((pr) => (
                  <div
                    key={pr.id}
                    className="border border-primary/20 rounded-lg p-4 glassmorphism hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h5 className="font-medium text-sm leading-tight">
                          {pr.title}
                        </h5>
                        {pr.url && (
                          <Button variant="ghost" size="sm" asChild className="ml-2 flex-shrink-0">
                            <Link
                              href={pr.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View PR: ${pr.title}`}
                            >
                              <Github className="h-3 w-3" />
                            </Link>
                          </Button>
                        )}
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pr.description}
                      </p>
                      
                      {/* PR Technologies */}
                      <div className="flex flex-wrap gap-1" data-animate="stagger">
                        {pr.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2 py-0 h-5 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

              {/* Show remaining count if collapsed */}
              {hasMultiplePRs && !isExpanded && project.pullRequests.length > 1 && (
                <p className="text-xs text-muted-foreground text-center py-2">
                  +{project.pullRequests.length - 1} more pull requests
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}