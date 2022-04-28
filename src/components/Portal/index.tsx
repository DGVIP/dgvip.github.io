import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
   children: ReactNode;
}

function Portal(props: PortalProps) {
   const { children } = props;

   const container = document.getElementById("portal")!;

   return createPortal(children, container);
}

export { Portal };
