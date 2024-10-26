// src/app/contact/page.jsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ContactInfo from "./ContactInfo";
import MapComponent from "./MapComponent";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

const ContactPage = () => {
  const { locale } = useLanguage();

  console.log("Locale:", locale);

  return (
    <div className={styles.container}>
      <ContactInfo />
      <MapComponent />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
