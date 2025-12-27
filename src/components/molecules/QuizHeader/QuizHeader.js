import styles from "./QuizHeader.module.css";
import { QuizContext } from "@/context/AppContext";

export default function QuizHeader() {
  const { selectedQuiz, displayedQuestionIndex } = QuizContext();
  const quizCategory = selectedQuiz?.category;
  const quizSubcategory = selectedQuiz?.subcategory;
  const quizQuestionCounter = selectedQuiz?.questions.length;
  const quizQuestionCurrentNum = displayedQuestionIndex + 1;
  console.log("selectedQuiz", selectedQuiz);

  return (
    <div className={styles.quizHeader}>
      <p>
        {quizQuestionCurrentNum}/{quizQuestionCounter}
      </p>
      <div className={styles.quizInfo}>
        <p className={styles.quizCategory}>
          {quizCategory} / {quizSubcategory}
        </p>
      </div>
    </div>
  );
}
