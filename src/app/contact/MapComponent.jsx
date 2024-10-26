"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext"; // Import the language context
import styles from "./contact.module.css";

const MapComponent = () => {
  const { locale } = useLanguage(); // Access the selected language

  // Text content for both languages
  const content = {
    ro: {
      title: "Parohia Ortodoxă Română din Prato",
      openInMaps: "Deschide cu Google Maps",
    },
    it: {
      title: "Parrocchia Ortodossa Romena di Prato",
      openInMaps: "Apri con Google Maps",
    },
  };

  return (
    <div className={styles.imgContent}>
      <Image
        src="/indirizzo.png"
        alt={content[locale]?.title} // Alt text in the selected language
        fill
        className={styles.img}
      />
      <a
        href="https://www.google.it/maps/place/Chiesa+Ortodossa+Santa+Anastasia,+Via+Elena+Berruti,+30,+59100+Prato+PO/@43.8855665,11.0902855,19z/data=!4m10!1m2!2m1!1sParohia+,,Sf.+M.+Mc.+Anastasia+Romana%22+PRATO+-+via+Elena+Berruti+30!3m6!1s0x132af668e2b49ce7:0xa44d5fca15fb6229!8m2!3d43.8855612!4d11.0903155!15sCkNQYXJvaGlhICwsU2YuIE0uIE1jLiBBbmFzdGFzaWEgUm9tYW5hIiBQUkFUTyAtIHZpYSBFbGVuYSBCZXJydXRpIDMwkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11c4p7j7t5?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.mapText}>
          <p>{content[locale]?.title}</p>
          <p>{content[locale]?.openInMaps}</p>
        </span>
      </a>
    </div>
  );
};

export default MapComponent;
