import { useLayoutEffect } from "react";
import styles from "./index.module.scss";
import type { Project } from "../../../types";
import { Portal } from "../../../components/Portal";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaEye, FaTimes } from "react-icons/fa";
import { mountModal, unmountModal } from "../../../utils/handleModal";

interface Props {
   isOpen: boolean;
   project: Project | null;
   closeModal: () => void;
}

function ProjectModal(props: Props) {
   const { isOpen, project, closeModal } = props;

   useLayoutEffect(() => {
      if (isOpen) {
         mountModal();
      } else {
         unmountModal();
      }
   }, [isOpen]);

   return (
      <Portal>
         <AnimatePresence>
            {isOpen && project && (
               <motion.div
                  className={styles.backdrop}
                  onClick={closeModal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  <motion.div
                     className={styles.modal}
                     layoutId={`project-${project.id}`}
                     onClick={(event) => event.stopPropagation()}
                  >
                     <motion.button
                        onClick={closeModal}
                        className={styles.closeButton}
                        whileTap={{ scale: 0.95 }}
                     >
                        <FaTimes />
                     </motion.button>
                     <img src={project.image} className={styles.image} />
                     <div className={styles.content}>
                        <h2>Modal</h2>
                        <ul className={styles.techList}>
                           {project.technologies.map((technology, index) => (
                              <li
                                 key={`technology-${index}`}
                                 className={styles.techItem}
                              >
                                 {technology}
                              </li>
                           ))}
                        </ul>
                        <h3>About the project:</h3>
                        <p
                           style={{
                              flex: 1,
                              overflowY: "auto",
                           }}
                        >
                           {project.about}
                        </p>
                        <div style={{ display: "flex", gap: "16px" }}>
                           <motion.a
                              href={project.demoLink}
                              target="_blank"
                              whileTap={{ scale: 0.95 }}
                              className={`${styles.button} ${styles.demoButton}`}
                           >
                              <FaEye />
                              <span>Demo</span>
                           </motion.a>
                           <motion.a
                              href={project.codeLink}
                              target="_blank"
                              whileTap={{ scale: 0.95 }}
                              className={`${styles.button} ${styles.demoButton}`}
                           >
                              <FaCode />
                              <span>Code</span>
                           </motion.a>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </Portal>
   );
}

export { ProjectModal };
