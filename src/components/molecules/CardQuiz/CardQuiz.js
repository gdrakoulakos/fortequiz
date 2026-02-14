import ButtonPlay from "@/components/atoms/ButtonPlay/ButtonPlay";
import styles from "../CardQuiz/CardQuiz.module.css";
import QuizImage from "@/components/atoms/QuizImage/QuizImage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CardQuiz({
  id,
  lesson,
  description,
  imgQuiz,
  totalQuestions,
}) {
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [gainedMedal, setGainedMedal] = useState({ gained: false, medal: "" });
  const storedResults = localStorage.getItem("quiz_results");
  const storedResultsArray = storedResults ? JSON.parse(storedResults) : [];
  const lessonExistsInStoredResults = storedResultsArray.find(
    (lesson) => lesson.lesson_id === id,
  );

  useEffect(() => {
    if (!lessonExistsInStoredResults?.lesson_id) return;
    if (lessonExistsInStoredResults.score === 100) {
      setGainedMedal({ gained: true, medal: "medal-one" });
    } else if (lessonExistsInStoredResults.score >= 80) {
      setGainedMedal({ gained: true, medal: "medal-two" });
    }

    if (lessonExistsInStoredResults.score >= 60) {
      setCompletedQuiz(true);
    }
  }, []);

  return (
    <div key={id} className={styles.quizCardContainer}>
      {completedQuiz && (
        <Image
          src={`/images/red-book-completed.png`}
          alt="completed quiz"
          className={styles.completedQuiz}
          width={50}
          height={50}
        />
      )}
      {gainedMedal.gained && (
        <Image
          src={`/images/${gainedMedal.medal}.png`}
          alt="medal"
          className={styles.medal}
          width={70}
          height={70}
        />
      )}

      <div className={styles.cardTop}>
        <QuizImage imgSrc={imgQuiz} />
      </div>
      <div className={styles.cardBottom}>
        <h3>{lesson}</h3>
        <p>{description}</p>
      </div>
      <ButtonPlay id={id} totalQuestions={totalQuestions} />
    </div>
  );
}
