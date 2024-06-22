"use client";
import { useEffect, useState } from "react";
import styles from "./motto.module.css";
import { useLanguage } from "@/lib/LanguageContext";

const Motto = () => {
  const [motto, setMotto] = useState({ ro: "", it: "" });
  const { locale } = useLanguage();

  useEffect(() => {
    const storedMotto = localStorage.getItem("motto");
    if (storedMotto) {
      setMotto(JSON.parse(storedMotto));
    }
  }, []);

  return (
    <div className={styles.motto}>
      <p>{motto[locale]}</p>
    </div>
  );
};

export default Motto;
