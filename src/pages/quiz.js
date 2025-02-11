import styles from "../pages/quiz.module.css";
import theoryQuestions from "../data/theoryQuestions.json";

export default function Quiz() {
  const questionsData = theoryQuestions.questions[0];

  return (
    <div className={styles.quizContainer}>
      <h1>{theoryQuestions.category}</h1>
      <h2>{questionsData.title}</h2>
      <h1>🕒</h1>
      <h2>{theoryQuestions.time}</h2>
      <div className={styles.quizAnswers}>
        <h3>{questionsData.answer1}</h3>
        <h3>{questionsData.answer2}</h3>
        <h3>{questionsData.answer3}</h3>
        <h3>{questionsData.answer4}</h3>
      </div>
    </div>
  );
}
