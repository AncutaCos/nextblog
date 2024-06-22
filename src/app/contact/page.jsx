"use client";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  const { locale } = useLanguage();

  console.log("Locale:", locale);

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
      name: "Nume",
      emailPlaceholder: "Email",
      phonePlaceholder: "Tel",
      messagePlaceholder: "Mesaj",
      send: "Trimite",
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
      name: "Nome",
      emailPlaceholder: "Email",
      phonePlaceholder: "Tel",
      messagePlaceholder: "Messaggio",
      send: "Invia",
    },
  };

  const currentContent = content[locale];

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.contactInfo}>
          <h2>{currentContent.contact}</h2>
          <p>{currentContent.priest}</p>
          <p>{currentContent.phone}</p>
          <p>{currentContent.address}</p>
          <p>
            {currentContent.email}{" "}
            <a
              href={`mailto:${currentContent.emailLink}`}
              className={styles.emailLink}
            >
              {currentContent.emailLink}
            </a>
          </p>
        </div>
        <div className={styles.imgContent}>
          <Image
            src="/indirizzo.png"
            alt="Address"
            fill
            className={styles.img}
          />
          <a
            href="https://www.google.it/maps/place/Chiesa+Ortodossa+Santa+Anastasia,+Via+Elena+Berruti,+30,+59100+Prato+PO/@43.8855665,11.0902855,19z/data=!4m10!1m2!2m1!1sParohia+,,Sf.+M.+Mc.+Anastasia+Romana%22+PRATO+-+via+Elena+Berruti+30!3m6!1s0x132af668e2b49ce7:0xa44d5fca15fb6229!8m2!3d43.8855612!4d11.0903155!15sCkNQYXJvaGlhICwsU2YuIE0uIE1jLiBBbmFzdGFzaWEgUm9tYW5hIiBQUkFUTyAtIHZpYSBFbGVuYSBCZXJydXRpIDMwkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11c4p7j7t5?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.mapText}>
              <p>{currentContent.parish}</p>
              <p>{currentContent.openWithGoogleMaps}</p>
            </span>
          </a>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form
          action="https://formspree.io/f/xjvnleyp"
          method="POST"
          className={styles.form}
        >
          <input type="text" name="name" placeholder={currentContent.name} />
          <input type="email" name="_replyto" placeholder={currentContent.emailPlaceholder} />
          <input type="text" name="phone" placeholder={currentContent.phonePlaceholder} />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder={currentContent.messagePlaceholder}
          ></textarea>
          <button type="submit">{currentContent.send}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
