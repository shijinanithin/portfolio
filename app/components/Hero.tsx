import Image from "next/image";
import styles from "./Hero.module.css";

const highlights = [
  {
    label: "Web apps delivered",
    value: "20+",
    note: "as Project Manager at 4SPOTS",
    big: true,
  },
  { label: "Frontend", value: "React · Next.js · TypeScript" },
  { label: "Backend", value: "Django · Flask · PostgreSQL" },
  { label: "Leadership", value: "Team lead on a live CRM project" },
];

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
          <a
            href="/cv.pdf"
            download="Shijina_Nithin_CV.pdf"
            className={styles.secondary}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.photo}>
        <Image
          src="/shijina.webp"
          alt="Portrait of Shijina Nithin"
          fill
          priority
          sizes="(max-width: 900px) 50vw, 25vw"
          className={styles.photoImg}
        />
      </div>

      {highlights.map((item, index) => (
        <div
          key={item.label}
          className={styles.tile}
          style={{ animationDelay: `${0.2 + index * 0.08}s` }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={item.big ? styles.bigValue : styles.value}>
            {item.value}
          </span>
          {item.note && <span className={styles.note}>{item.note}</span>}
        </div>
      ))}
    </section>
  );
}
