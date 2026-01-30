"use client";
import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import LoginArea from "../LoginArea/LoginArea";
import { SignedIn } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <header className={styles.menuContainer}>
        <Link href={"/"}>
          <Image
            className={styles.logoIcon}
            src="/images/logo/logo-header.png"
            width={60}
            height={60}
            alt="forte quiz logo"
            loading="eager"
          />
        </Link>
        <SignedIn>
          <Link href={"/myQuizzes"} className={styles.myQuizzes}>
            Τα Quiz μου
          </Link>
        </SignedIn>
        <div className={styles.loginArea}>
          <LoginArea />
        </div>
      </header>
    </>
  );
}
