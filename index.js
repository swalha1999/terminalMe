import bash from "./scripts/bash.js";
const app = document.querySelector("#app");

// global event listener
app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
})

bash(app);