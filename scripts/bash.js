import { println, scanf_promise, clearScreen } from "./util.js";
import { printName } from "./about.js";


const commandHistory = [];
var commandIterator = 0;


export default function bash(app) {
    app.addEventListener("keydown", commandHistoryEventHandler);
    bashStartup();
}

async function commandHistoryEventHandler(event) {
    if (event.key === "ArrowUp") {
        if (commandIterator > 0) {
            commandIterator--;
            const input = document.querySelector("input");
            input.value = commandHistory[commandIterator];
        }
    }
    else if (event.key === "ArrowDown") {
        if (commandIterator < commandHistory.length - 1) {
            commandIterator++;
            const input = document.querySelector("input");
            input.value = commandHistory[commandIterator];
        }
    }
}

async function bashStartup() {
    await bashWelcome();
    bashMainLoop();

}

async function bashWelcome() {
    println("Welcome to my website!");
    println("Starting the server...");
    println("You can run several commands:");
    createCode("about", "Who am i and what do i do.");
    createCode("help or -h", "See all commands.");
    createCode("social -a", "All my social networks.");
}

async function bashMainLoop() {
    var loopCount = 0;
    while (true) {
        console.log(loopCount++);
        const command = await scanf_promise(true);
        app.removeEventListener("keydown", commandHistoryEventHandler);
        commandHistory.push(command);
        commandIterator = commandHistory.length;
        if (command === "about") {
            await printName();
        }
        if(command === "clear"){
            await clearScreen();
        }
        app.addEventListener("keydown", commandHistoryEventHandler);
    }
}

function createCode(code, text) {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML =
        `${code} <br/><span class='text'> ${text} </span>`;
    app.appendChild(p);
}



