"use client";
import { addProject } from "@/lib/action";
import styles from "./adminProjectForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const AdminProjectForm = ({ project }) => {
  const [state, formAction] = useFormState(addProject, undefined);
  const [editorContent, setEditorContent] = useState(project?.description || "");
  const [useDefaultImage, setUseDefaultImage] = useState(false);

  const applyFormatting = (format) => {
    let textarea = document.getElementById("project-editor");
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let text = textarea.value;

    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    const selectedText = text.substring(start, end);

    let newText;
    switch (format) {
      case "p": {
        newText = `${before}<p>${selectedText}</p>${after}`;
        break;
      }
      case "h1": {
        newText = `${before}<h1>${selectedText}</h1>${after}`;
        break;
      }
      case "h2": {
        newText = `${before}<h2>${selectedText}</h2>${after}`;
        break;
      }
      case "b": {
        newText = `${before}<b>${selectedText}</b>${after}`;
        break;
      }
      case "br": {
        newText = `${before}<br>${selectedText}${after}`;
        break;
      }
      case "link": {
        const url = prompt("Enter URL");
        if (url) {
          newText = `${before}<a href="${url}">${selectedText}</a>${after}`;
        } else {
          newText = text;
        }
        break;
      }
      default: {
        newText = text;
      }
    }
    setEditorContent(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const images = [
      formData.get("image1"),
      formData.get("image2"),
      formData.get("image3"),
      formData.get("image4"),
      formData.get("image5")
    ].filter(Boolean);

    if (useDefaultImage && images.length === 0) {
      formData.set("image1", "/default/Default.jpg");
    }
    formData.set("useDefaultImage", useDefaultImage);
    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>{project ? "Modifica Proiect" : "Adaugă proiect nou"}</h1>
      <input type="hidden" name="projectId" value={project?.id || ""} />
      <input type="text" name="title" placeholder="Titlu  (obligatoriu)" defaultValue={project?.title || ""} />
      
      <div className={styles.editorToolbar}>
      <button type="button" onClick={() => applyFormatting("h1")}>Titlu mare</button>
      <button type="button" onClick={() => applyFormatting("h2")}>Titlu mediu</button>
      <button type="button" onClick={() => applyFormatting("b")}>Bold</button>
        <button type="button" onClick={() => applyFormatting("p")}>Paragraf</button>
        <button type="button" onClick={() => applyFormatting("br")}>Spatiu</button>
        <button type="button" onClick={() => applyFormatting("link")}>Link</button>
      </div>

      <textarea
        id="project-editor"
        name="description"
        placeholder="Descriere   (obligatoriu)"
        rows={10}
        value={editorContent}
        onChange={(e) => setEditorContent(e.target.value)}
      />

      {[...Array(5)].map((_, i) => (
        <input
          key={i}
          type="text"
          name={`image${i + 1}`}
          placeholder={`URL Imagine (opțional)${i + 1}`}
          defaultValue={project ? project[`image${i + 1}`] : ""}
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

      <button type="submit">{project ? "Salvează modificările" : "Adaugă"}</button>
      {state?.error}
    </form>
  );
};

export default AdminProjectForm;
