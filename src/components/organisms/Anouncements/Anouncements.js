"use client";

import { useEffect, useState } from "react";
import styles from "./Anouncements.module.css";
import { AnimatePresence, motion } from "motion/react";

export default function Anouncements() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, delay: 3 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showAnnouncement && (
        <motion.div
          className={styles.announcementsContainer}
          {...motionProps}
          key={"announcementsContainer"}
        >
          <p className={styles.announcementText}>
            Ο Quizakos μας βρίσκεται σε στάδιο ανάπτυξης και οι ερωτήσεις του
            μπορεί να περιέχουν λάθη. Λίγη υπομονή...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
