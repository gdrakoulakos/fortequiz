import styles from "./ButtonOk.module.css";

export default function ButtonOk({ onClick }) {
  return (
    <div className={styles.okButton} onClick={onClick}>
      ΟΚ
    </div>
  );
}
