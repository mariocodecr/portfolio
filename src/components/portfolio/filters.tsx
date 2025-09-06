"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { type ProjectFilters, type Project } from "@/types/portfolio";

interface FiltersProps {
  projects: Project[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
}

export function Filters({ projects, filters, onFiltersChange }: FiltersProps) {
  // Get unique project options
  const projectOptions = React.useMemo(() => {
    return [
      { value: "all", label: "All Projects" },
      ...projects.map((project) => ({
        value: project.id,
        label: project.name,
      })),
    ];
  }, [projects]);

  // Get unique technology options from all projects and PRs
  const technologyOptions = React.useMemo(() => {
    const techSet = new Set<string>();
    
    projects.forEach((project) => {
      // Add project technologies
      project.technologies.forEach((tech) => techSet.add(tech));
      
      // Add PR technologies
      project.pullRequests.forEach((pr) => {
        pr.technologies.forEach((tech) => techSet.add(tech));
      });
    });
    
    const sortedTechs = Array.from(techSet).sort();
    
    return [
      { value: "all", label: "All Technologies" },
      ...sortedTechs.map((tech) => ({
        value: tech,
        label: tech,
      })),
    ];
  }, [projects]);

  const handleProjectChange = (value: string) => {
    onFiltersChange({
      ...filters,
      activeProjectId: value,
    });
  };

  const handleTechChange = (value: string) => {
    onFiltersChange({
      ...filters,
      activeTech: value,
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      searchText: event.target.value,
    });
  };

  return (
    <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4">
      {/* Project Filter */}
      <div className="w-full lg:w-64">
        <Select value={filters.activeProjectId} onValueChange={handleProjectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select project..." />
          </SelectTrigger>
          <SelectContent>
            {projectOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Technology Filter */}
      <div className="w-full lg:w-64">
        <Select value={filters.activeTech} onValueChange={handleTechChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select technology..." />
          </SelectTrigger>
          <SelectContent>
            {technologyOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Input */}
      <div className="w-full lg:flex-1 lg:max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects and PRs..."
          value={filters.searchText}
          onChange={handleSearchChange}
          className="pl-10"
        />
      </div>
    </div>
  );
}