export function mountModal() {
   const scrollbarWidth = window.innerWidth - document.body.clientWidth;
   document.body.style.overflow = "hidden";
   document.body.style.paddingRight = `${scrollbarWidth}px`;
}

export function unmountModal() {
   document.body.removeAttribute("style");
}
