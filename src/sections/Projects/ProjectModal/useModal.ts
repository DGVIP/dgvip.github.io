import { useReducer } from "react";
import type { Project } from "../../../types";

interface State {
   modalIsOpen: boolean;
   selectedProject: Project | null;
}

type Action =
   | {
        type: "OPEN_MODAL";
        payload: { project: Project };
     }
   | {
        type: "CLOSE_MODAL";
     };

function modalReducer(state: State, action: Action): State {
   switch (action.type) {
      case "OPEN_MODAL":
         return {
            ...state,
            modalIsOpen: true,
            selectedProject: action.payload.project,
         };
      case "CLOSE_MODAL":
         return {
            ...state,
            modalIsOpen: false,
            selectedProject: null,
         };
      default:
         throw new Error();
   }
}

const initialState: State = {
   modalIsOpen: false,
   selectedProject: null,
};

function useModal() {
   const [state, dispatch] = useReducer(modalReducer, initialState);

   const { modalIsOpen, selectedProject } = state;

   const openModal = (project: Project) => {
      dispatch({ type: "OPEN_MODAL", payload: { project } });
   };

   const closeModal = () => {
      dispatch({ type: "CLOSE_MODAL" });
   };

   return {
      modalIsOpen,
      selectedProject,
      openModal,
      closeModal,
   };
}

export { useModal };
