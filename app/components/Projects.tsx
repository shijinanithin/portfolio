import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
import styles from "./Projects.module.css";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <FeaturedProject />
      <ProjectGrid />
    </section>
  );
}
