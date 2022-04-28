import styles from "./index.module.scss";

function About() {
   return (
      <section id="about" className={styles.container}>
         <h2>About</h2>
         <p>
            Im a software developer who was raised in Peru and is currently
            residing in Uruguay.
         </p>
      </section>
   );
}

export { About };
