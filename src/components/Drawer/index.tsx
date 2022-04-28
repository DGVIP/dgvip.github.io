import { useLayoutEffect } from "react";
import { Portal } from "../Portal";
import styles from "./index.module.scss";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { mountModal, unmountModal } from "../../utils/handleModal";

interface Props {
   isOpen: boolean;
   closeDrawer: () => void;
}

const backdropVariants: Variants = {
   hidden: {
      opacity: 0,
      transition: {
         when: "afterChildren",
      },
   },
   visible: {
      opacity: 1,
      transition: {
         when: "beforeChildren",
      },
   },
};

const drawerVariants: Variants = {
   hidden: {
      y: "-100%",
      transition: {
         duration: 0.5,
      },
   },
   visible: {
      y: 0,
      transition: {
         type: "spring",
         duration: 0.5,
         bounce: 0.5,
      },
   },
};

function Drawer(props: Props) {
   const { isOpen, closeDrawer } = props;

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
            {isOpen && (
               <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={backdropVariants}
                  className={styles.backdrop}
                  onClick={closeDrawer}
               >
                  <motion.div
                     variants={drawerVariants}
                     className={styles.drawer}
                     onClick={(event) => event.stopPropagation()}
                  >
                     <a className={styles.link} href="#home">
                        Home
                     </a>
                     <a className={styles.link} href="#about">
                        About
                     </a>
                     <a className={styles.link} href="#projects">
                        Projects
                     </a>
                     <a className={styles.link} href="#contact">
                        Contact
                     </a>
                     <button
                        className={styles.closeButton}
                        onClick={closeDrawer}
                     >
                        Close
                     </button>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </Portal>
   );
}

export { Drawer };
