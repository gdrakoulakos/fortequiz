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

  if (!showAnnouncement) {
    return null;
  }

  return (
    showAnnouncement && (
      <AnimatePresence mode="wait">
        <motion.div className={styles.announcementsContainer} {...motionProps}>
          <p className={styles.announcementText}>
            Ο Quizakos βρίσκεται σε στάδιο ανάπτυξης και οι ερωτήσεις περιέχουν
            λάθη.
          </p>
        </motion.div>
      </AnimatePresence>
    )
  );
}
