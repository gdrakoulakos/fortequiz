import CardQuiz from "@/components/molecules/CardQuiz/CardQuiz";
import notationAndStructure from "../../../data/quizQuestions/theory/notationAndStructure";
import chordsAndHarmony from "../../../data/quizQuestions/theory/chordsAndHarmony";
import styles from "../TheoryQuizzes/TheoryQuizzes.module.css";

export default function NotationAndStructure() {
  return (
    <div className={styles.allQuizContainer}>
      <h1>{notationAndStructure.category}</h1>
      <div className={styles.cardsContainer}>
        <CardQuiz
          quizCategory={"notationAndStructure"}
          name={notationAndStructure.subcategory}
          description={notationAndStructure.description}
        />
        <CardQuiz
          quizCategory={"chordsAndHarmony"}
          name={chordsAndHarmony.subcategory}
          description={chordsAndHarmony.description}
        />
      </div>
    </div>
  );
}
