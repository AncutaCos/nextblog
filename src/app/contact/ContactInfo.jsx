import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./contact.module.css";

const ContactInfo = () => {
  const { locale } = useLanguage(); 

  const content = {
    ro: {
      contact: "Contact",
      priest: "Preot Anton Mihai",
      phone: "Tel. 3396356697",
      address: "Adresa : Via Elena Berruti, 30, 59100, Prato, Po",
      email: "Email: ",
      emailLink: "prato@mitropolia.eu",
      parish: "Parohia Ortodoxă Română Prato",
      openWithGoogleMaps: "Deschide cu Google Maps",
    },
    it: {
      contact: "Contatto",
      priest: "Prete Anton Mihai",
      phone: "Tel. 3396356697",
      address: "Indirizzo: Via Elena Berruti, 30, 59100, Prato, Po",
      email: "Email: ",
      emailLink: "prato@mitropolia.eu",
      parish: "Parrocchia Ortodossa Romena di Prato",
      openWithGoogleMaps: "Apri con Google Maps",
    },
  };

  const currentContent = content[locale];

  return (
    <div>
      <h2>{currentContent.contact}</h2>
      <p>{currentContent.priest}</p>
      <p>{currentContent.phone}</p>
      <p>{currentContent.address}</p>
      <p>
        {currentContent.email}{" "}
        <a
          href={`mailto:${currentContent.emailLink}`}
          className={styles.emailLink} // Add CSS class here
        >
          {currentContent.emailLink}
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
