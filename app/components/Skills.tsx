import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeading eyebrow="Expertise" title="Skills" />
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            <TagList tags={group.skills} />
          </div>
        ))}
      </div>
    </section>
  );
}
