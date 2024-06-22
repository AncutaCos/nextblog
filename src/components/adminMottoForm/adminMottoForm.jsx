"use client";
import { useState } from "react";
import styles from "./adminMottoForm.module.css";

const AdminMottoForm = () => {
  const [mottoRo, setMottoRo] = useState("");
  const [mottoIt, setMottoIt] = useState("");
  const [editorContentRo, setEditorContentRo] = useState("");
  const [editorContentIt, setEditorContentIt] = useState("");

  const applyFormatting = (tag, language) => {
    let textarea = document.getElementById(`editor-${language}`);
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let text = textarea.value;

    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    const selectedText = text.substring(start, end);

    const newText = `${before}<${tag}>${selectedText}</${tag}>${after}`;

    if (language === "ro") {
      setEditorContentRo(newText);
    } else {
      setEditorContentIt(newText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const motto = JSON.stringify({ ro: editorContentRo, it: editorContentIt });
    localStorage.setItem("motto", motto);
    alert("Motto aggiornato con successo!");
  };

  return (
    <div className={styles.container}>
      <h2>Aggiorna il Motto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="mottoRo">Motto in Rumeno:</label>
          <div className={styles.editorToolbar}>
            <button type="button" onClick={() => applyFormatting("b", "ro")}>
              <b>B</b>
            </button>
            <button type="button" onClick={() => applyFormatting("i", "ro")}>
              <i>I</i>
            </button>
            <button type="button" onClick={() => applyFormatting("u", "ro")}>
              <u>U</u>
            </button>
            <button type="button" onClick={() => applyFormatting("h1", "ro")}>
              H1
            </button>
            <button type="button" onClick={() => applyFormatting("h2", "ro")}>
              H2
            </button>
            <button type="button" onClick={() => applyFormatting("p", "ro")}>
              P
            </button>
          </div>
          <textarea
            id="editor-ro"
            value={editorContentRo}
            onChange={(e) => setEditorContentRo(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mottoIt">Motto in Italiano:</label>
          <div className={styles.editorToolbar}>
            <button type="button" onClick={() => applyFormatting("b", "it")}>
              <b>B</b>
            </button>
            <button type="button" onClick={() => applyFormatting("i", "it")}>
              <i>I</i>
            </button>
            <button type="button" onClick={() => applyFormatting("u", "it")}>
              <u>U</u>
            </button>
            <button type="button" onClick={() => applyFormatting("h1", "it")}>
              H1
            </button>
            <button type="button" onClick={() => applyFormatting("h2", "it")}>
              H2
            </button>
            <button type="button" onClick={() => applyFormatting("p", "it")}>
              P
            </button>
          </div>
          <textarea
            id="editor-it"
            value={editorContentIt}
            onChange={(e) => setEditorContentIt(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Aggiorna
        </button>
      </form>
    </div>
  );
};

export default AdminMottoForm;
