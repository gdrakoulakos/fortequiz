import styles from "../CardQuiz/CardQuiz.module.css";

export default function CardQuiz({ quizName, quizDescription }) {
  return (
    <div className={styles.quizCard}>
      <h3>{quizName}</h3>
      <p>{quizDescription}</p>
    </div>
  );
}
