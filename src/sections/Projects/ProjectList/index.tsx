import { LayoutGroup } from "framer-motion";

import styles from "./index.module.scss";
import type { Project } from "../../../types";
import { ProjectItem } from "../ProjectItem";
import { ProjectModal } from "../ProjectModal";
import { useModal } from "../ProjectModal/useModal";

interface Props {
   projects: Project[];
}

function ProjectList(props: Props) {
   const { projects } = props;

   const { modalIsOpen, selectedProject, openModal, closeModal } = useModal();

   return (
      <LayoutGroup>
         <div className={styles.projectList}>
            {projects.map((project) => (
               <ProjectItem
                  key={project.id}
                  project={project}
                  openModal={openModal}
               />
            ))}
         </div>
         <ProjectModal
            isOpen={modalIsOpen}
            project={selectedProject}
            closeModal={closeModal}
         />
      </LayoutGroup>
   );
}

export { ProjectList };
