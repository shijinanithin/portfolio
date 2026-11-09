import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <div>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>{project.title}</li>
        ))}
      </ul>
    </section>
  );
}
