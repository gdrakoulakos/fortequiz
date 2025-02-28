import styles from "./page.module.css";
import Footer from "@/components/organisms/Footer/Footer";
import TheoryQuizzes from "@/components/organisms/TheoryQuizzes/TheoryQuizzes";
import WelcomeBanner from "@/components/organisms/WelcomeBanner/WelcomeBanner";
import notationAndStructure from "../data/quizQuestions/theory/notationAndStructure";
import chordsAndHarmony from "../data/quizQuestions/theory/chordsAndHarmony";

export default function Home() {
  console.log("chordsAndHarmony is ", chordsAndHarmony);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WelcomeBanner />
        <TheoryQuizzes
          notationAndStructureData={notationAndStructure}
          chordsAndHarmonyData={chordsAndHarmony}
        />
      </main>
      <Footer />
    </div>
  );
}
