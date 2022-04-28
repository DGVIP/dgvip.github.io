import { IconType } from "react-icons";

export interface Language {
   name: string;
   code: string;
}

export interface Project {
   id: string;
   name: string;
   image: string;
   about: string;
   technologies: string[];
   codeLink: string;
   demoLink: string;
}

export interface ContactOption {
   name: string;
   value: string;
   link: string;
   target: string;
   icon: IconType;
}
