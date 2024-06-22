"use client"
import { addBook } from "@/lib/action"; // Assicurati che il tuo file action abbia una funzione addBook
import styles from "./adminBookForm.module.css";
import { useFormState } from "react-dom";
import Image from "next/image";

const AdminBookForm = () => {
  const [state, formAction] = useFormState(addBook, undefined);

  const defaultImageUrl = "/default/Default.jpg";
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Adaugă Carte</h1>
      <input type="text" name="title" placeholder="Titlu  (obligatoriu)" />
      <input type="text" name="author" placeholder="Autor  (obligatoriu)" />
      <input type="text" name="description" placeholder="Descriere" />
      <input type="text" name="image" placeholder="URL Imagine" />
      <input type="text" name="fileUrl" placeholder="URL PDF  (obligatoriu)" />
       {/* Utilizza l'URL dell'immagine di default se non viene fornito alcun URL */}
 {state && (
   <Image
     src={state.image || defaultImageUrl}
     alt="Project Image"
     width={200}
     height={200}
   />
 )}
      <button>Adaugă</button>
      {state?.error}
    </form>
  );
};

export default AdminBookForm;