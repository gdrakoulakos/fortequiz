import styles from "./QuestionAndAnswersCard.module.css";
import QuizQuestion from "@/components/atoms/QuizQuestion/QuizQuestion";
import ButtonAnswer from "@/components/atoms/ButtonAnswer/ButtonAnswer";
import QuestionImage from "@/components/atoms/QuestionImage/QuestionImage";
import { QuizContext } from "@/context/AppContext";

export default function QuestionAndAnswersCard() {
  const {
    selectedQuiz,
    setDisplayedQuestionIndex,
    displayedQuestionIndex,
    clickedAnswersResults,
    setClickedAnswersResults,
  } = QuizContext();
  const availableAnswers =
    selectedQuiz?.questions[displayedQuestionIndex]?.availableAnswers;

  const handleClickedAnswer = (clickedAnswer) => {
    if (clickedAnswersResults.totalAnswers < 10) {
      if (
        clickedAnswer ===
        selectedQuiz?.questions[displayedQuestionIndex]?.correctAnswer
      ) {
        setClickedAnswersResults((prev) => ({
          ...prev,
          correctAnswers: prev.correctAnswers + 1,
          totalAnswers: prev.totalAnswers + 1,
        }));
        console.log("Correct answer!");
      } else {
        setClickedAnswersResults((prev) => ({
          ...prev,
          incorrectAnswers: prev.incorrectAnswers + 1,
          totalAnswers: prev.totalAnswers + 1,
        }));
        console.log("Wrong answer!");
      }
    }
    if (displayedQuestionIndex < 9) {
      setTimeout(() => {
        setDisplayedQuestionIndex((prev) => prev + 1);
      }, 200);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.questionContainer}>
        <QuestionImage />
        <QuizQuestion />
      </div>
      <div className={styles.answersContainer}>
        {availableAnswers?.map((availableAnswer, index) => (
          <ButtonAnswer
            key={index}
            children={availableAnswer}
            onClick={() => handleClickedAnswer(availableAnswer)}
          />
        ))}
      </div>
    </div>
  );
}
