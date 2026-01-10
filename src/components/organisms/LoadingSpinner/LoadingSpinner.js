import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner({ message }) {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.loader} />
      <p>{message}</p>
    </div>
  );
}
