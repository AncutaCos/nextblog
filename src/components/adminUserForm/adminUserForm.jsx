"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Adaugă utilizator/admin</h1>
      <input type="text" name="username" placeholder="Nume utilizator" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Parolă" />
      <input type="text" name="img" placeholder="Url Imagine (opțional)" />
      <select name="isAdmin">
        <option value="false">E Admin?</option>
        <option value="false">Nu</option>
        <option value="true">Da</option>
      </select>
      <button>Adaugă</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;