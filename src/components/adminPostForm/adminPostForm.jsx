"use client";
import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [editorContent, setEditorContent] = useState("");
  const [useDefaultImage, setUseDefaultImage] = useState(false);
  const defaultImageUrl = "/default/Default.jpg"; // Percorso URL dell'immagine di default

  const applyFormatting = (tag) => {
    let textarea = document.getElementById("editor");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let text = textarea.value;

    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    const selectedText = text.substring(start, end);
    
    const newText = `${before}<${tag}>${selectedText}</${tag}>${after}`;
    setEditorContent(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const images = [
      formData.get("img1"),
      formData.get("img2"),
      formData.get("img3"),
      formData.get("img4"),
      formData.get("img5"),
    ].filter(Boolean);

    if (useDefaultImage && images.length === 0) {
      formData.set("img1", defaultImageUrl);
    }
    formData.set("useDefaultImage", useDefaultImage);

    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>Adaugă Postare</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Titlu  (obligatoriu)" />
      <input type="text" name="slug" placeholder="Slug  (numărul postării)" />

      <div className={styles.editorToolbar}>
        <button type="button" onClick={() => applyFormatting("b")}><b>Bold</b></button>
        <button type="button" onClick={() => applyFormatting("i")}><i>Italic</i></button>
        <button type="button" onClick={() => applyFormatting("u")}><u>Subliniat</u></button>
        <button type="button" onClick={() => applyFormatting("h1")}>Titlu mare</button>
        <button type="button" onClick={() => applyFormatting("h2")}>Titlu mic</button>
        <button type="button" onClick={() => applyFormatting("p")}>Paragraf</button>
      </div>

      <textarea
        id="editor"
        name="desc"
        placeholder="Descriere (obligatoriu)"
        rows={10}
        value={editorContent}
        onChange={(e) => setEditorContent(e.target.value)}
      />

      {[...Array(5)].map((_, i) => (
        <input
          key={i}
          type="text"
          name={`img${i + 1}`}
          placeholder={`URL Immagine (opțional) ${i + 1}`}
        />
      ))}

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="useDefaultImage"
          name="useDefaultImage"
          checked={useDefaultImage}
          onChange={(e) => setUseDefaultImage(e.target.checked)}
        />
        <label htmlFor="useDefaultImage">Adauga immaginea de default daca nu sunt immagini</label>
      </div>

      <button type="submit">Adaugă Postare</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
