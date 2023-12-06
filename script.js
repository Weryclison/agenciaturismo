const body = document.body;
body.classList.add("js");

import menuMobile from "./js/menu-mobile.js";

if (body.classList.contains("js")) {
  menuMobile();
}
