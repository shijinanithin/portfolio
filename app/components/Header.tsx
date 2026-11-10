"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

const sectionIds = ["top", "work", "about", "skills", "contact"];

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#top" className={styles.logo}>
          Shijina <span>· Full-stack Developer</span>
        </a>
        <div className={styles.links}>
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className={styles.button}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
