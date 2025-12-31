import styles from "./ButtonNext.module.css";
import { motion } from "motion/react";

export default function ButtonNext({ buttonText, onClick }) {
  return (
    <motion.div
      key={buttonText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button className={styles.nextButton} onClick={onClick}>
        {buttonText}
      </button>
    </motion.div>
  );
}
