import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.grid}>
      <div className={styles.intro}>
        <p className={styles.status}>
          <span className={styles.dot}></span>
          Available for new roles · Bahrain
        </p>
        <h1 className={styles.title}>
          I build fast, reliable websites and web applications.
        </h1>
        <p className={styles.text}>
          Full-stack developer working across React, Next.js, Django and
          PostgreSQL — from interface design to database.
        </p>
        <div className={styles.buttons}>
          <a href="#work" className={styles.primary}>
            View my work
          </a>
          <a href="/cv.pdf" className={styles.secondary}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
