import Image from "next/image";
import { featuredProject as project } from "../data/projects";
import TagList from "./TagList";
import styles from "./FeaturedProject.module.css";

export default function FeaturedProject() {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.previewImg}
          />
        ) : (
          <span className={styles.placeholder}>Screenshot coming soon</span>
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.label}>{project.label}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <dl className={styles.facts}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>

        <ul className={styles.highlights}>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <TagList tags={project.tags} />
      </div>
    </article>
  );
}
