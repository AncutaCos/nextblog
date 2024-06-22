// components/BookCard.js
import React from "react";
import styles from "./bookCard.module.css";
import Image from "next/image";

const BookCard = ({ book }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{book.author}</p>
      <div className={styles.imageContainer}>
        <Image
          src={book.image || "/default/Default.jpg"}
          alt={book.title}
          width={200} // Specifica la larghezza desiderata dell'immagine
          height={250} // Specifica l'altezza desiderata dell'immagine
          className={styles.image}
        />
      </div>
      <p className={styles.description}>{book.description}</p>
      <a href={book.fileUrl} download className={styles.downloadLink}>
        Download PDF
      </a>
    </div>
  );
};

export default BookCard;
