import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
import styles from "./Projects.module.css";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Projects" />
      </Reveal>
      <Reveal>
        <FeaturedProject />
      </Reveal>
      <ProjectGrid />
    </section>
  );
}
