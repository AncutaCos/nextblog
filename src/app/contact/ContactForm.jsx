"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./contact.module.css"; // Import styles

const ContactForm = () => {
  const { locale } = useLanguage(); // Get the current locale

  // Content for different languages
  const content = {
    ro: {
      namePlaceholder: "Nume",
      emailPlaceholder: "Email",
      phonePlaceholder: "Tel",
      messagePlaceholder: "Mesaj",
      submitButton: "Trimite",
    },
    it: {
      namePlaceholder: "Nome",
      emailPlaceholder: "Email",
      phonePlaceholder: "Tel",
      messagePlaceholder: "Messaggio",
      submitButton: "Invia",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to your API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.formContainer}>
      <form
        action="https://formspree.io/f/xjvnleyp"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit} // Handle submit event
      >
        <input
          type="text"
          name="name"
          placeholder={content[locale]?.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="_replyto"
          placeholder={content[locale]?.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder={content[locale]?.phonePlaceholder}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder={content[locale]?.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">{content[locale]?.submitButton}</button>
      </form>
    </div>
  );
};

export default ContactForm;
