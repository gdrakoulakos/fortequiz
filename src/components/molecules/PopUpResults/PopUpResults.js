import styles from "./PopUpResults.module.css";
import Image from "next/image";


export default function PopUpResults({ resultMessage, correctAnswers, onClick }) {
  return (
    <div className={styles.popUpResultsContainer}>
        <Image
              src="/images/bravo.png"
              width={200}
              height={200}
              alt="Bravo icon"
            />
      <div>{resultMessage}</div>
      <div className={styles.correctAnswers}>{correctAnswers}</div>
      <div className={styles.okButton} onClick={onClick}>Δες ξανά τις απαντήσεις σου</div>
    </div>
  );
}
