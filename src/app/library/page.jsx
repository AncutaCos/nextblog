
import BookCard from "@/components/bookCard/bookCard";
import { getBooks } from "@/lib/data";
import styles from "./library.module.css";

const LibraryPage = async () => {
  // FETCH DATA WITHOUT AN API
  const books = await getBooks();

  return (
    <div className={styles.container}>
      <h1>Biblioteca</h1>
      <div className={styles.booksContainer}>
        {books.map((book) => (
          <div key={book.id} className={styles.bookColumn}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
