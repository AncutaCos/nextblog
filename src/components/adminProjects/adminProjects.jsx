import { getProjects } from "@/lib/data"; // Assumi che ci sia una funzione getBooks simile a getPosts per ottenere i dati dei libri
import styles from "./adminProjects.module.css"; // Assumi che ci sia un file CSS simile per lo stile dei libri
import Image from "next/image";
import { deleteProject } from "@/lib/action"; // Assumi che ci sia una funzione deleteBook simile a deletePost per eliminare i libri

const AdminProjects = async () => {
  const projects = await getProjects(); // Assumi che ci sia una funzione getBooks simile a getPosts per ottenere i dati dei libri

  return (
    <div className={styles.container}>
      <h1>Proiecte</h1>
      {projects.map((project) => (
        <div className={styles.project} key={project.id}>
          <div className={styles.detail}>
            <Image
              src={project.image1 || "/defaultProjectImage.png"} 
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.projectTitle}>{project.title}</span>
          </div>
          <form action={deleteProject}>
            <input type="hidden" name="id" value={project.id} />
            <button className={styles.projectButton}>Șterge</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminProjects;
