import { ContactOption } from "../types";

import { FaEnvelope, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";

const contactOptions: ContactOption[] = [
   {
      name: "email",
      value: "dgvip1998@gmail.com",
      link: "mailto:dgvip1998@gmail.com",
      target: "_self",
      icon: FaEnvelope,
   },
   {
      name: "phone",
      value: "+598-99-162-800",
      link: "tel:+59899162800",
      target: "_self",
      icon: FaPhone,
   },
   {
      name: "whatsapp",
      value: "+598-99-162-800",
      link: "https://wa.me/59899162800",
      target: "_blank",
      icon: FaWhatsapp,
   },
   {
      name: "telegram",
      value: "/dgvip1998",
      link: "https://t.me/dgvip1998",
      target: "_blank",
      icon: FaTelegram,
   },
];

export { contactOptions };
