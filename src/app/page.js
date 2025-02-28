import styles from "./page.module.css";
import Footer from "@/components/organisms/Footer/Footer";
import TheoryQuizzes from "@/components/organisms/TheoryQuizzes/TheoryQuizzes";
import WelcomeBanner from "@/components/organisms/WelcomeBanner/WelcomeBanner";
import notationAndStructure from "../data/quizQuestions/theory/notationAndStructure";
import chordsAndHarmony from "../data/quizQuestions/theory/chordsAndHarmony";
import baroqueAndClassicalEras from "../data/quizQuestions/history/baroqueAndClassicalEras";
import romanticAndModernEras from "../data/quizQuestions/history/romanticAndModernEras";
import HistoryQuizzes from "@/components/organisms/HistoryQuizzes/HistoryQuizzes";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WelcomeBanner />
        <TheoryQuizzes
          notationAndStructureData={notationAndStructure}
          chordsAndHarmonyData={chordsAndHarmony}
        />
        <HistoryQuizzes
          baroqueAndClassicalErasData={baroqueAndClassicalEras}
          romanticAndModernErasData={romanticAndModernEras}
        />
      </main>
      <Footer />
    </div>
  );
}
