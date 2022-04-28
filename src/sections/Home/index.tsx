import styles from "./index.module.scss";

function Home() {
   return (
      <section id="home" className={styles.container}>
         <h1 className={styles.name}>Diego Mendoza Pinto</h1>
         <h1 className={styles.role}>
            {"-> "}Software Developer{" <-"}
         </h1>
         {/* <FaLaptopCode className={styles.image} /> */}
      </section>
   );
}

export { Home };
