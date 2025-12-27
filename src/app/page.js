"use client";
import styles from "./page.module.css";
import WelcomeBanner from "@/components/organisms/WelcomeBanner/WelcomeBanner";
import Quizzes from "@/components/organisms/Quizzes/Quizzes";
import { QuizContext } from "../context/AppContext";
import { useEffect } from "react";

export default function Home() {
  const { allQuizCategories, setDisplayedQuestionIndex } = QuizContext();

  useEffect(() => {
    setDisplayedQuestionIndex(0);
  }, []);

  return (
    <div className={styles.page}>
      <WelcomeBanner />
      {allQuizCategories.map((quiz) => (
        <div key={quiz}>
          <Quizzes category={quiz} />
        </div>
      ))}
    </div>
  );
}
