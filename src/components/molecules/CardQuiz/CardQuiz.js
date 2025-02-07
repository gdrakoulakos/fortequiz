import cardQuizData from "../../../data/cardQuizData.json";
import styles from "../CardQuiz/CardQuiz.module.css"

export default function CardQuiz() {
  return (
    <div className={styles.allQuizContainer}>
      {cardQuizData.category.map((category) => (
        <div className={`styles.${category.name.toLowerCase()}QuizContainer`}>
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div className={styles.quizCard}>
              {category.quizzes.map((quiz) => (
                <div key={quiz.id}>
                  <h3>{quiz.name}</h3>
                  <p>{quiz.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
