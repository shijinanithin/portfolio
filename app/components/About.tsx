import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Reveal>
        <SectionHeading eyebrow="About" title="From design to database." />
      </Reveal>
      <Reveal delay={0.1}>
        <div className={styles.text}>
          <p>
            I build complete web applications: clear interfaces, solid APIs and
            well-structured databases. I focus on pages that load fast, read
            clearly and work well on every device.
          </p>
          <p>
            Earlier in my career, I managed web and application projects at
            4SPOTS for clients such as Bahrain International Airport, Lexus
            Bahrain. It taught me how real projects run, from gathering
            requirements to testing and launch.
          </p>
          <p>
            Most recently, I led a team of five on a live CRM project, turning a
            Figma design into a working React application.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
