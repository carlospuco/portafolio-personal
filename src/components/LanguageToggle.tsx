"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./LanguageToggle.module.scss";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const toggle = () => setLang(lang === "en" ? "es" : "en");

  return (
    <div className={styles.toggle}>
      {/* Desktop: EN | ES */}
      <button
        className={`${styles.btn} ${styles.desktopOnly} ${lang === "en" ? styles.active : ""}`}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={`${styles.divider} ${styles.desktopOnly}`}>|</span>
      <button
        className={`${styles.btn} ${styles.desktopOnly} ${lang === "es" ? styles.active : ""}`}
        onClick={() => setLang("es")}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      {/* Mobile: botón compacto que cicla idiomas */}
      <button
        className={`${styles.btn} ${styles.mobileOnly} ${styles.active}`}
        onClick={toggle}
        aria-label="Toggle language"
      >
        {lang.toUpperCase()}
      </button>
    </div>
  );
}
