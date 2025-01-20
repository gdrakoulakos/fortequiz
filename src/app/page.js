import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const headerList = [
    { id: 1, name: "Theory", link: "/theory" },
    { id: 2, name: "History", link: "/history" },
    { id: 3, name: "Instruments", link: "/instruments" },
    { id: 4, name: "Ear Testing", link: "/earTesting" },
    { id: 5, name: "Modern", link: "/modern" },
    { id: 6, name: "Trivia", link: "/trivia" },
    { id: 7, name: "About Us", link: "/aboutUs" },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            {headerList.map(({ id, link, name }) => (
              <li key={id}>
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.welcomeBanner}>
          <h1>Welcome to forteQuiz</h1>
          <p1>Play some Quizzes and test your music skills</p1>
        </div>
        <div className={styles.allQuizContainer}>
          <div className={styles.theoryQuizContainer}>
            <h2>Theory</h2>
            <div className={styles.theoryQuiz}>
              <h3>Find the music note</h3>
              <p1>A small description of music note</p1>
            </div>
            <div className={styles.theoryQuiz}>
              <h3>Find the intervals</h3>
              <p1>A small description of intervals</p1>
            </div>
            <div className={styles.theoryQuiz}>
              <h3>Find the key</h3>
              <p1>A small description of the key</p1>
            </div>
          </div>
          <div className={styles.historyQuizContainer}>
            <h2>History</h2>
            <div className={styles.historyQuiz}>
              <h3>Find the music note</h3>
              <p1>A small description of music note</p1>
            </div>
            <div className={styles.historyQuiz}>
              <h3>Find the intervals</h3>
              <p1>A small description of intervals</p1>
            </div>
            <div className={styles.historyQuiz}>
              <h3>Find the key</h3>
              <p1>A small description of the key</p1>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <nav>
          <ul className={styles.footerList}>
            {headerList.map(({ id, link, name }) => (
              <li key={id}>
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
