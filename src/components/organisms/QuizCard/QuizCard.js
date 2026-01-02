import QuestionAndAnswersCard from "@/components/molecules/QuestionAndAnswersCard/QuestionAndAnswersCard";
import QuizHeader from "@/components/molecules/QuizHeader/QuizHeader";
import styles from "./QuizCard.module.css";
import CompletionStatus from "@/components/molecules/CompletionStatus/CompletionStatus";
import { QuizContext } from "@/context/AppContext";

export default function QuizCard() {
  const { selectedQuiz } = QuizContext();

  if (!selectedQuiz?.id) {
    return null;
  }

  return (
    <div className={styles.quizCard}>
      <QuizHeader />
      <CompletionStatus />
      <QuestionAndAnswersCard />
    </div>
  );
}
