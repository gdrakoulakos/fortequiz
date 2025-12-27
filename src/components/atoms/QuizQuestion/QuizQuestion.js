import styles from "./QuizQuestion.module.css";
import { QuizContext } from "@/context/AppContext";

export default function QuizQuestion() {
  const { selectedQuiz, displayedQuestionIndex } = QuizContext();
  const questionTitle = selectedQuiz?.questions[displayedQuestionIndex]?.title;

  return <div className={styles.quizQuestion}>{questionTitle}</div>;
}
