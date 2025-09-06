"use client";

import * as React from "react";
import { ProjectCard } from "./project-card";
import { Filters } from "./filters";
import { portfolioData } from "@/lib/data";
import { type ProjectFilters } from "@/types/portfolio";

export function ProjectsSection() {
  const [filters, setFilters] = React.useState<ProjectFilters>({
    activeProjectId: "all",
    activeTech: "all",
    searchText: "",
  });

  // Filter projects based on current filters
  const filteredProjects = React.useMemo(() => {
    let filtered = [...portfolioData.projects];

    // Filter by project ID
    if (filters.activeProjectId !== "all") {
      filtered = filtered.filter((project) => project.id === filters.activeProjectId);
    }

    // Filter by technology and search text
    if (filters.activeTech !== "all" || filters.searchText.trim() !== "") {
      filtered = filtered
        .map((project) => {
          // First, filter PRs within each project
          let filteredPRs = project.pullRequests;

          // Filter by technology
          if (filters.activeTech !== "all") {
            filteredPRs = filteredPRs.filter((pr) =>
              pr.technologies.includes(filters.activeTech) ||
              project.technologies.includes(filters.activeTech)
            );
          }

          // Filter by search text
          if (filters.searchText.trim() !== "") {
            const searchLower = filters.searchText.toLowerCase();
            filteredPRs = filteredPRs.filter((pr) =>
              pr.title.toLowerCase().includes(searchLower) ||
              pr.description.toLowerCase().includes(searchLower) ||
              pr.technologies.some((tech) => tech.toLowerCase().includes(searchLower)) ||
              project.name.toLowerCase().includes(searchLower) ||
              project.description.toLowerCase().includes(searchLower) ||
              project.technologies.some((tech) => tech.toLowerCase().includes(searchLower))
            );
          }

          return {
            ...project,
            pullRequests: filteredPRs,
          };
        })
        .filter((project) => {
          // Only include projects that have matching PRs or match the project-level filters
          if (filters.searchText.trim() !== "") {
            const searchLower = filters.searchText.toLowerCase();
            const projectMatches =
              project.name.toLowerCase().includes(searchLower) ||
              project.description.toLowerCase().includes(searchLower) ||
              project.technologies.some((tech) => tech.toLowerCase().includes(searchLower));
            
            return projectMatches || project.pullRequests.length > 0;
          }
          
          return project.pullRequests.length > 0;
        });
    }

    return filtered;
  }, [filters]);

  const totalPRs = React.useMemo(() => {
    return filteredProjects.reduce((total, project) => total + project.pullRequests.length, 0);
  }, [filteredProjects]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4" data-animate="section">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient animate-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-animate="text">
              A showcase of my contributions across various projects, highlighting{" "}
              <span className="text-primary font-semibold" data-count={totalPRs.toString()}>
                {totalPRs}
              </span>{" "}
              pull requests that demonstrate my expertise in full-stack development.
            </p>
          </div>

          {/* Filters */}
          <div className="glassmorphism border border-primary/20 rounded-lg p-6 card-glow" data-animate="card">
            <Filters
              projects={portfolioData.projects}
              filters={filters}
              onFiltersChange={setFilters}
            />
            
            {/* Results Summary */}
            <div className="mt-4 text-sm text-muted-foreground" data-animate="text">
              Showing{" "}
              <span className="text-primary font-medium" data-count={filteredProjects.length.toString()}>
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? 's' : ''} 
              {totalPRs > 0 && (
                <span> with{" "}
                  <span className="text-accent font-medium" data-count={totalPRs.toString()}>
                    {totalPRs}
                  </span>{" "}
                  pull request{totalPRs !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl">🔍</div>
              <h3 className="text-xl font-semibold text-foreground">No projects found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your filters or search terms to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {/* Additional Info */}
          {filteredProjects.length > 0 && (
            <div className="text-center py-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Each project represents real-world contributions with detailed pull requests 
                showcasing problem-solving, code quality, and technical implementation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}