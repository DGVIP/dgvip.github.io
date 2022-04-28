import { ContactOption } from "../../../types";
import { ContactOptionItem } from "../ContactOptionItem";
import styles from "./index.module.scss";

interface Props {
   contactOptions: ContactOption[];
}

function ContactOptionList(props: Props) {
   const { contactOptions } = props;

   return (
      <div className={styles.contactOptionList}>
         {contactOptions.map((contactOption) => (
            <ContactOptionItem
               key={`contact-option-${contactOption.name}`}
               contactOption={contactOption}
            />
         ))}
      </div>
   );
}

export { ContactOptionList };
