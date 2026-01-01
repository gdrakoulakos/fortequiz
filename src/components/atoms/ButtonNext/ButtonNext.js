import styles from "./ButtonNext.module.css";
import { motion } from "motion/react";
import Image from "next/image";

export default function ButtonNext({ buttonText, onClick }) {
  return (
    <motion.div
      key={buttonText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.buttonContainer}
    >
      <Image
        src={"/images/next.svg"}
        alt="next question"
        width={30}
        height={30}
        className={styles.buttonImage}
        onClick={onClick}
      />
      <div className={styles.buttonText}>{buttonText}</div>
    </motion.div>
  );
}
