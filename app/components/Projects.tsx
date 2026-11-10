import { projects } from "../data/projects";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <div>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <FeaturedProject />
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
