const body = document.body;
body.classList.add("js");

import menuMobile from "./js/menu-mobile.js";
import perguntas from "./js/abrir-resposta.js";

if (body.classList.contains("js")) {
  menuMobile();
  perguntas();
}
