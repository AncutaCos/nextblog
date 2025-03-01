// components/CookieBanner.jsx
import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    // Qui puoi attivare Google Analytics o altri cookie
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <p>
        Utilizziamo i cookie per migliorare l esperienza utente. 
        <a href="/privacy-policy" className={styles.link}>
          Leggi la nostra Privacy Policy.
        </a>
      </p>
      <div className={styles.buttons}>
        <button onClick={handleAccept} className={styles.acceptButton}>
          Accetta
        </button>
        <button onClick={handleDecline} className={styles.declineButton}>
          Rifiuta
        </button>
      </div>
    </div>
  );
}
