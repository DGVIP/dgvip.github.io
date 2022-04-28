import { motion } from "framer-motion";
import styles from "./index.module.css";
import type { Project } from "../../../types";

interface Props {
   project: Project;
   openModal: (project: Project) => void;
}

function ProjectItem(props: Props) {
   const { project, openModal } = props;

   const handleClick = () => {
      openModal(project);
   };

   return (
      <motion.div
         onClick={handleClick}
         layoutId={`project-${project.id}`}
         className={styles.projectItem}
         whileHover={{ scale: 1.05 }}
      >
         <img src={project.image} className={styles.projectImage} />
         <h3 className={styles.projectTitle}>
            {project.id} 27 react sabandayo
         </h3>
      </motion.div>
   );
}

export { ProjectItem };
