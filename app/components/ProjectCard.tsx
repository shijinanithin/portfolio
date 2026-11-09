import type { Project } from "../data/projects";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  number: number;
};

export default function ProjectCard({ project, number }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.label}>{project.label}</span>
        <span className={styles.number}>{String(number).padStart(2, "0")}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      {(project.demoUrl || project.codeUrl) && (
        <div className={styles.links}>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo →
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
