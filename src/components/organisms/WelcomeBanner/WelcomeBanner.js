import styles from "../WelcomeBanner/WelcomeBanner.module.css";

export default function WelcomeBanner() {
  return (
    <div className={styles.welcomeBanner}>
      <h3>Καλώς ήρθες στο</h3> <h1>forteQuiz!</h1>
      <h3>Παίξε και δοκίμασε τις γνώσεις σου!</h3>
    </div>
  );
}
