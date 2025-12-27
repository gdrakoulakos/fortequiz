import styles from "./QuestionAndAnswersCard.module.css";
import QuizQuestion from "@/components/atoms/QuizQuestion/QuizQuestion";
import ButtonAnswer from "@/components/atoms/ButtonAnswer/ButtonAnswer";
import QuestionImage from "@/components/atoms/QuestionImage/QuestionImage";
import { QuizContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function QuestionAndAnswersCard() {
  const { selectedQuiz, setDisplayedQuestionIndex, displayedQuestionIndex } =
    QuizContext();
  const availableAnswers =
    selectedQuiz?.questions[displayedQuestionIndex]?.availableAnswers;

  console.log("displayedQuestionIndex", displayedQuestionIndex);

  const handleClickedAnswer = (answer) => {
    console.log("Clicked answer ", answer);
    if (displayedQuestionIndex < 9) {
      setDisplayedQuestionIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("availableAnswers", availableAnswers);
  }, [availableAnswers]);

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
