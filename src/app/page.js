"use client";
import styles from "./page.module.css";
import Footer from "@/components/organisms/Footer/Footer";
import WelcomeBanner from "@/components/organisms/WelcomeBanner/WelcomeBanner";
import Quizzes from "@/components/organisms/Quizzes/Quizzes";
import { QuizContext } from "../context/AppContext";

export default function Home() {
  const { allQuizCategories } = QuizContext();

  return (
    <div className={styles.page}>
      <WelcomeBanner />
      {allQuizCategories.map((quiz) => (
        <div key={quiz}>
          <Quizzes category={quiz} />
        </div>
      ))}
      <Footer />
    </div>
  );
}
