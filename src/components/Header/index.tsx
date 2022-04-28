import { useState } from "react";
import { FaBars, FaGlobe, FaPalette } from "react-icons/fa";
import { Drawer } from "../Drawer";
import styles from "./index.module.css";

function Header() {
   const [drawerIsOpen, setDrawerIsOpen] = useState(false);

   const openDrawer = () => {
      setDrawerIsOpen(true);
   };

   const closeDrawer = () => {
      setDrawerIsOpen(false);
   };

   return (
      <>
         <header className={styles.header}>
            <div className={styles.container}>
               Header
               <div style={{ display: "flex", gap: "8px" }}>
                  <button className={styles.menuButton}>
                     <FaGlobe />
                  </button>
                  <button className={styles.menuButton}>
                     <FaPalette />
                  </button>
                  <button className={styles.menuButton} onClick={openDrawer}>
                     <FaBars />
                  </button>
               </div>
            </div>
         </header>
         <Drawer isOpen={drawerIsOpen} closeDrawer={closeDrawer} />
      </>
   );
}

export { Header };
