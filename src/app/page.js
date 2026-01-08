"use client";
import styles from "./page.module.css";
import WelcomeBanner from "@/components/organisms/WelcomeBanner/WelcomeBanner";
import CardQuizzes from "@/components/organisms/CardQuizzes/CardQuizzes";
import { QuizContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const {
    allQuizCategories,
    setDisplayedQuestionIndex,
    setClickedAnswersResults,
    setShowPopUpResults,
  } = QuizContext();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("default_quizzes")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setRows(data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedQuestionIndex(0);
    setClickedAnswersResults({
      correctAnswers: 0,
      incorrectAnswers: 0,
      totalAnswers: 0,
      incorrectAnswersData: [],
    });
    setShowPopUpResults(false);
  }, []);

  return (
    <>
      <motion.div
        className={styles.homePage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <WelcomeBanner />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.allQuizCategories}
      >
        {allQuizCategories.map((quiz) => (
          <div key={quiz}>
            <CardQuizzes category={quiz} />
          </div>
        ))}
      </motion.div>
    </>
  );
}
