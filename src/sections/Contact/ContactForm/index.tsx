import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface FormData {
   name: string;
   email: string;
   message: string;
}

function ContactForm() {
   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<FormData>();

   const onSubmit = (formData: FormData) => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log(formData);
            resolve({ name: "Diego", email: " ", message: " " });
         }, 5000);
      });
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <input
            className={styles.input}
            {...register("name")}
            placeholder={"Name"}
         />
         <input
            className={styles.input}
            {...register("email")}
            placeholder={"E-Mail"}
         />
         <textarea
            className={styles.input}
            {...register("message")}
            rows={3}
            placeholder={"Message"}
         />
         <motion.button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
         >
            {isSubmitting ? "Sending..." : "Send"}
         </motion.button>
      </form>
   );
}

export { ContactForm };
