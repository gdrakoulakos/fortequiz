import QuestionAndAnswersCard from "@/components/molecules/QuestionAndAnswersCard/QuestionAndAnswersCard";
import QuizHeader from "@/components/molecules/QuizHeader/QuizHeader";
import styles from "./QuizCardQuestion.module.css";
import CompletionStatus from "@/components/molecules/CompletionStatus/CompletionStatus";

export default function QuizCardQuestion() {
  return (
    <div className={styles.quizCard}>
      <QuizHeader />
      <CompletionStatus />
      <QuestionAndAnswersCard />
    </div>
  );
}
