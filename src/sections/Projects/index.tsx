import styles from "./index.module.css";
import { ProjectList } from "./ProjectList";
import { projects } from "../../data/projects";

function Projects() {
   return (
      <section id="projects" className={styles.container}>
         <h2>Projects</h2>
         <ProjectList projects={projects} />
      </section>
   );
}

export { Projects };
