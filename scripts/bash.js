import { println, scanf_promise } from "./util.js";
import { printName } from "./about.js";
const delay = ms => new Promise(res => setTimeout(res, ms));


const history = [];
var iter=0;


export default function bash(app) {
    app.addEventListener("keydown", historyEvent);
    bashStartup();
}

async function historyEvent(event) {
    if (event.key === "ArrowUp") {
        if(iter>0){
            iter--;
            const input = document.querySelector("input");
            input.value = history[iter];
        }
    }
    else if (event.key === "ArrowDown") {
        if(iter<history.length-1){
            iter++;
            const input = document.querySelector("input");
            input.value = history[iter];
        }
    }
}


async function bashStartup() {
  println("Welcome");
  await delay(150);
  println("Starting the server...");
  await delay(700);
  println("You can run several commands:");

  createCode("about", "Who am i and what do i do.");
  createCode("help or -h", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(150);
  bashMainLoop();

}

async function bashMainLoop() {
    var loopCount = 0;
    while(true){
        console.log(loopCount++);
        const command = await scanf_promise(true);
        app.removeEventListener("keydown", historyEvent);
        history.push(command);
        iter=history.length;        
        if (command === "about") {
            await printName();
        }
        app.addEventListener("keydown", historyEvent);
    }
 }


//create code function to create the code tag with the text inside.
function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}



