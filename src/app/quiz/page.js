"use client";
import quizStyles from "./quiz.module.css";
import buttonStyles from "@/components/atoms/ButtonAnswer/ButtonAnswer.module.css"; // Import button styles
import { useState } from "react";
import ButtonAnswer from "@/components/atoms/ButtonAnswer/ButtonAnswer";
import { QuizContext } from "../../context/AppContext";

export default function Quiz() {
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { selectedQuiz } = QuizContext();

  const handleAnswer = (answer, questionIndex, answerIndex, correctAnswer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: {
        ...prev[questionIndex],
        [answerIndex]:
          answer === correctAnswer
            ? buttonStyles.correctAnswer
            : buttonStyles.incorrectAnswer,
      },
    }));

    if (answer === correctAnswer) {
      setTotalCorrectAnswers((prev) => prev + 1);
    }
  };

  return (
    selectedQuiz && (
      <div className={quizStyles.quizContainer}>
        <h1>{selectedQuiz.category}</h1>
        <h1>{selectedQuiz.subcategory}</h1>
        <h2>🕒 {selectedQuiz.time} seconds</h2>
        <h2>Correct Answers: {totalCorrectAnswers}</h2>

        {selectedQuiz?.questions?.map((question, questionIndex) => (
          <div key={questionIndex} className={quizStyles.questionBlock}>
            <h2>{`${question.id}. ${question.title}`}</h2>

            {question.availableAnswers.map((answer, answerIndex) => (
              <div
                key={answerIndex}
                className={quizStyles.quizAnswersContainer}
              >
                <span>
                  <ButtonAnswer
                    className={`${buttonStyles.answerButton} ${
                      selectedAnswers[questionIndex]?.[answerIndex] || ""
                    }`}
                    onClick={() =>
                      handleAnswer(
                        answer,
                        questionIndex,
                        answerIndex,
                        question.correctAnswer
                      )
                    }
                    disabled={
                      Object.keys(selectedAnswers[questionIndex] || {}).length >
                      0
                    }
                  >
                    {answer}
                  </ButtonAnswer>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
}
