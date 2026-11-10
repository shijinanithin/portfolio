import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 Shijina Nithin</span>
        <span>Full-stack Developer · Bahrain</span>
      </div>
    </footer>
  );
}
