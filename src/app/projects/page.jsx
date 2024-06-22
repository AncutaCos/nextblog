import ProjectCard from "@/components/projectCard/projectCard";
import { getProjects } from "@/lib/data";
import styles from "./projects.module.css";

const ProjectsPage = async () => {
  // FETCH DATA WITHOUT AN API
  const projects = await getProjects();

  return (
    <div className={styles.container}>
      <h1>Proiecte / Progetti</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectColumn}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
