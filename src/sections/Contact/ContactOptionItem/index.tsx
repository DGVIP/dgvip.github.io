import { motion } from "framer-motion";
import styles from "./index.module.scss";
import type { ContactOption } from "../../../types";

interface Props {
   contactOption: ContactOption;
}

function ContactOptionItem(props: Props) {
   const { contactOption } = props;

   return (
      <motion.a
         whileTap={{ scale: 0.95 }}
         whileHover={{ scale: 1.05 }}
         href={contactOption.link}
         target={contactOption.target}
         className={styles.contactOptionItem}
      >
         <p>
            <contactOption.icon />
         </p>
         {contactOption.name}
         <p>{contactOption.value}</p>
      </motion.a>
   );
}

export { ContactOptionItem };
