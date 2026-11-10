import styles from "./TagList.module.css";

type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
