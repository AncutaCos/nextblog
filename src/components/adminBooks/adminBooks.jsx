import { getBooks } from "@/lib/data"; // Assumi che ci sia una funzione getBooks simile a getPosts per ottenere i dati dei libri
import styles from "./adminBooks.module.css"; // Assumi che ci sia un file CSS simile per lo stile dei libri
import Image from "next/image";
import { deleteBook } from "@/lib/action"; // Assumi che ci sia una funzione deleteBook simile a deletePost per eliminare i libri

const AdminBooks = async () => {
  const books = await getBooks(); // Assumi che ci sia una funzione getBooks simile a getPosts per ottenere i dati dei libri

  return (
    <div className={styles.container}>
      <h1>Lista de Cărți</h1>
      {books.map((book) => (
        <div className={styles.book} key={book.id}>
          <div className={styles.detail}>
            <Image
              src={book.image || "/default/Default.jpg"} // Assumi un'immagine predefinita per i libri senza immagine
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.bookTitle}>{book.title}</span>
          </div>
          <form action={deleteBook}>
            <input type="hidden" name="id" value={book.id} />
            <button className={styles.bookButton}>Șterge</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminBooks;
