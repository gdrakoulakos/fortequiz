import CardQuiz from "@/components/molecules/CardQuiz/CardQuiz";
import styles from "../HistoryQuizzes/HistoryQuizzes.module.css";

export default function HistoryQuizzes({
    baroqueAndClassicalErasData,
    romanticAndModernErasData,
}) {
  const cardsData = [
    {
      id: 1,
      quizCategory: "baroqueAndClassicalEras",
      subcategory: baroqueAndClassicalErasData.subcategory,
      description: baroqueAndClassicalErasData.description,
    },
    {
      id: 2,
      quizCategory: "romanticAndModernEras",
      subcategory: romanticAndModernErasData.subcategory,
      description: romanticAndModernErasData.description,
    },
  ];

  return (
    <>
      <h1>{baroqueAndClassicalErasData.category}</h1>
      <div className={styles.cardsContainer}>
        {cardsData.map((card) => (
          <CardQuiz
            id={card.id}
            quizCategory={card.quizCategory}
            name={card.subcategory}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}
