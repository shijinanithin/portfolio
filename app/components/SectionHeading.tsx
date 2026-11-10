import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
