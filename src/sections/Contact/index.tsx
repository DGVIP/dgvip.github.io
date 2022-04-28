import styles from "./index.module.css";
import { ContactForm } from "./ContactForm";
import { ContactOptionList } from "./ContactOptionList";
import { contactOptions } from "../../data/contactOptions";

function Contact() {
   return (
      <section id="contact" className={styles.section}>
         <h2>Contact</h2>
         <div className={styles.content}>
            <ContactOptionList contactOptions={contactOptions} />
            <ContactForm />
         </div>
      </section>
   );
}

export { Contact };
