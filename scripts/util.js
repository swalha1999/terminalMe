const app = document.querySelector("#app");

var savedInput = "";
var isValidInput = false;

export function println(text, classname) {
    const p = document.createElement("p");
    if (classname) p.className = classname;
    p.innerHTML = text;
    app.appendChild(p);
}

function saveInput(event) {
    if (event.key === "Enter") {
        savedInput = document.querySelector("input").value;
        isValidInput = true;
    }
}

function addInputListener() {
    document.addEventListener("keypress", saveInput);
}

function removeInputListener() {
    document.removeEventListener("keypress", saveInput);
}

function newInputField() {
    const input = document.createElement("input");
    input.type = "text";
    input.autofocus = true;
    app.appendChild(input);
    input.focus();
}

function removeInputField() {
    const input = document.querySelector("input");
    app.removeChild(input);
}

function addValueToScreen(value) {
    const div = document.createElement("section");
    // div.setAttribute("class", "type2")
    const i = document.createElement("i");
    // i.setAttribute("class", "fas fa-angle-right icone")
    const mensagem = document.createElement("h2");
    // mensagem.setAttribute("class", "sucess")
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
  }

export function scanf_promise() {
    return new Promise((resolve) => {
        newInputField();
        addInputListener();

        function checkInput() {
            if (isValidInput) {
                removeInputListener();
                addValueToScreen(savedInput);
                removeInputField();
                isValidInput = false;
                // attacthEventlistener(app);
                resolve(savedInput);
            } else {
                requestAnimationFrame(checkInput);
            }
        }

        checkInput();
    });
}
