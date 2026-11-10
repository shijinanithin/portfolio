import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";
import styles from "./Skills.module.css";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <Reveal>
        <SectionHeading eyebrow="Expertise" title="Skills" />
      </Reveal>
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <TagList tags={group.skills} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
