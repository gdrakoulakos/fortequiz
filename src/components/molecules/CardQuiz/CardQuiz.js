import ButtonPlay from "@/components/atoms/ButtonPlay/ButtonPlay";
import styles from "../CardQuiz/CardQuiz.module.css";

export default function CardQuiz({ quizCategory, name, description }) {
  return (
    <div className={styles.quizCardContainer}>
      <div className={styles.cardTop}>
        <h1>🎼</h1>
      </div>
      <div className={styles.cardBottom}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <ButtonPlay quizCategory={quizCategory} />
    </div>
  );
}
