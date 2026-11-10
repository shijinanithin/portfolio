"use client";

import { useState } from "react";
import { projects, type Category } from "../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

type Filter = "all" | Category;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "fullstack", label: "Full-stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>("all");

  const visibleProjects =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            aria-pressed={active === filter.value}
            className={
              active === filter.value ? styles.activeButton : styles.button
            }
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={projects.indexOf(project) + 1}
          />
        ))}
      </div>
    </>
  );
}
