import type { ReactNode } from "react";
import { Header } from "../Header";
import styles from "./index.module.css";

interface Props {
   children: ReactNode;
}

function Layout(props: Props) {
   const { children } = props;

   return (
      <>
         <Header />
         <main className={styles.container}>{children}</main>
      </>
   );
}

export { Layout };
