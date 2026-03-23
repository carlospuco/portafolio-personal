"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.scss";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.content}>
        <div className={styles.name}>Carlos Puco</div>
        <div className={styles.bar}>
          <div className={styles.barFill} />
        </div>
        <div className={styles.role}>Full-Stack Developer</div>
      </div>
    </div>
  );
}
