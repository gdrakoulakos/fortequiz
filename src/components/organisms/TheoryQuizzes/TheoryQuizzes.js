import CardQuiz from "@/components/molecules/CardQuiz/CardQuiz";

import styles from "../TheoryQuizzes/TheoryQuizzes.module.css";

export default function TheoryQuizzes({
  notationAndStructureData,
  chordsAndHarmonyData,
}) {
  console.log("chordsAndHarmonyData is ", chordsAndHarmonyData);

  const cardsData = [
    {
      id: 1,
      quizCategory: "notationAndStructure",
      subcategory: notationAndStructureData.subcategory,
      description: notationAndStructureData.description,
    },
    {
      id: 2,
      quizCategory: "chordsAndHarmony",
      subcategory: chordsAndHarmonyData.subcategory,
      description: chordsAndHarmonyData.description,
    },
  ];

  return (
    <div className={styles.allQuizContainer}>
      <h1>{notationAndStructureData.category}</h1>
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
    </div>
  );
}
