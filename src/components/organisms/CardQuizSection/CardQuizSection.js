import CardQuiz from "@/components/molecules/CardQuiz/CardQuiz";
import cardQuizData from "../../../data/cardQuizData.json";
import styles from "../CardQuizSection/CardQuizSection.module.css";

export default function CardQuizSection() {
  return (
    <div className={styles.allQuizContainer}>
      {cardQuizData.categories.map((category) => (
        <div key={category.id} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.name}</h2>
          <div className={styles.quizContainer}>
            {category.quizzes.map((quiz) => (
              <CardQuiz
                key={quiz.id}
                quizName={quiz.name}
                quizDescription={quiz.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
