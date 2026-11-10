import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <div>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <FeaturedProject />
      <ProjectGrid />
    </section>
  );
}
