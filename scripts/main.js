import bash from "./bash.js";
import { printName } from "./about.js";
const app = document.querySelector("#app");

// global event listener
app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
})

bash(app);