import { println, scanf_promise } from "./util.js";
import { printName } from "./about.js";
const delay = ms => new Promise(res => setTimeout(res, ms));

const history = [];
var iter=0;


export default function bash(app) {
    open_terminal();
}

async function open_terminal() {
  println("Welcome");
  await delay(150);
  println("Starting the server...");
  await delay(700);
  println("You can run several commands:");

  createCode("about", "Who am i and what do i do.");
  createCode("help or -h", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(150);
  new_line();

}

async function new_line() {
    //lets block the code until the user types something
    const command = await scanf_promise(true);

    //add the command to the history
    history.push(command);
    iter++;
    
    if (command === "about") {
        await printName();
    }

    new_line();
 }


//create code function to create the code tag with the text inside.
function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}



