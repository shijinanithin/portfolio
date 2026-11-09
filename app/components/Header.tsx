import styles from "./Header.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#top" className={styles.logo}>
          Shijina <span>· Full-stack Developer</span>
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.button}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
