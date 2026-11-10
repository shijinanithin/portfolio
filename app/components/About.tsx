import SectionHeading from "./SectionHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <SectionHeading eyebrow="About" title="From design to database." />
      <div className={styles.text}>
        <p>
          I build complete web applications: clear interfaces, solid APIs and
          well-structured databases. I focus on pages that load fast, read
          clearly and work well on every device.
        </p>
        <p>
          Before moving into development, earlier in my career, I managed web
          and application projects at 4SPOTS for clients such as Bahrain
          International Airport, Lexus Bahrain and Kuwait Finance House. It
          taught me how real projects run, from gathering requirements to
          testing and launch.
        </p>
        <p>
          Most recently, I led a team of five on a live CRM project, turning a
          Figma design into a working React application.
        </p>
      </div>
    </section>
  );
}
