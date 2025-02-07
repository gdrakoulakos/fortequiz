import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} forteQuiz. All Rights Reserved.</p>
    </footer>
  );
}
