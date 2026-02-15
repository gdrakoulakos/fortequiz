"use client";
import CardsScore from "@/components/organisms/CardsScore/CardsScore";
import styles from "./myScore.module.css";

export default function myScore() {
  return (
    <div className={styles.scoreSection}>
      <h1>Το σκορ μου</h1>
      <CardsScore />
    </div>
  );
}
