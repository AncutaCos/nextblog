import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminBookForm from "@/components/adminBookForm/adminBookForm";
import { auth } from "@/lib/auth";
import AdminBooks from "@/components/adminBooks/adminBooks";
import AdminProjects from "@/components/adminProjects/adminProjects";
import AdminProjectForm from "@/components/adminProjectForm/adminProjectForm";
import AdminMottoForm from "@/components/adminMottoForm/adminMottoForm";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
      <div className={styles.row}>
        {" "}
        {/* Aggiungi una nuova riga per AdminBookForm */}
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminBooks />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminBookForm />
        </div>
      </div>
      <div className={styles.row}>
        {" "}
        {/* Aggiungi una nuova riga per AdminBookForm */}
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminProjects />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminProjectForm />
        </div>
      </div>
      <div className={styles.row}>
  {" "}
  {/* Aggiungi una nuova riga per AdminBookForm */}
  <div className={styles.col}>
    <AdminMottoForm />
  </div>
</div>
    </div>
  );
};

export default AdminPage;
