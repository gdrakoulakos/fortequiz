import styles from "../WelcomeBanner/WelcomeBanner.module.css";

export default function WelcomeBanner() {
  return (
    <div className={styles.welcomeBanner}>
      <h1>Welcome to forteQuiz</h1>
      <p1>Play some Quizzes and test your music skills</p1>
    </div>
  );
}
