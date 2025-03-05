"use client";
import Link from "next/link";
import styles from "../Header/Header.module.css";
import { QuizContext } from "../../../context/AppContext";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const { allQuizCategories } = QuizContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className={styles.mobileContainer}>
        <div className={styles.topnav}>
          <div className={styles.active}>
            <div className={styles.icon} onClick={toggleMenu}>
              <Image
                src="/images/menu.png"
                width={40}
                height={40}
                alt="Menu icon"
              />
            </div>
            <div
              className={styles.myLinks}
              style={{ display: isMenuOpen ? "block" : "none" }}
            >
              {allQuizCategories.map((title, index) => (
              <li key={index}>
                <Link href={"/"}>{title}</Link>
              </li>
            ))}
            </div>
          </div>

          <a href="#home">🦉</a>
        </div>

        {/* <nav>
          <ul className={styles.navList}>
            {allQuizCategories.map((title, index) => (
              <li key={index}>
                <Link href={"/"}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </header>
    </>
  );
}
