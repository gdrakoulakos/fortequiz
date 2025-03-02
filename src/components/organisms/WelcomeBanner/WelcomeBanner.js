import styles from "../WelcomeBanner/WelcomeBanner.module.css";

export default function WelcomeBanner() {
  return (
    <div className={styles.welcomeBanner}>
      <h1>Καλώς ήρθες στο forteQuiz!</h1>
      <p>Παίξε κάποιο κουίζ και δοκίμασε τις γνώσεις σου!</p>
    </div>
  );
}
