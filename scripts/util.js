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

function newInputField(isBash = false) {
    if(isBash){
        const div = document.createElement("div");
        div.setAttribute("class", "type")
        const i = document.createElement("i");
        const path = document.createElement("span");
        path.setAttribute("class", "path")
        path.textContent = "root@MohammadYosef:~$ ";
        i.setAttribute("class", "fas fa-angle-right icone")
        const input = document.createElement("input");
        div.appendChild(i);
        div.appendChild(path);
        div.appendChild(input);
        app.appendChild(div);
        input.focus();
    }
    else{
        const input = document.createElement("input");
        input.type = "text";
        input.autofocus = true;
        app.appendChild(input);
        input.focus();
    }
}

function removeInputField(isBash = false) {
    if(isBash){
        const div = document.querySelector(".type");
        app.removeChild(div);
    }
    else{
        const input = document.querySelector("input");
        app.removeChild(input);
    }
}

function addValueToScreen(value, isBash = false) {
    const div = document.createElement("section");
    const i = document.createElement("i");
    const mensagem = document.createElement("h2");
    const path = document.createElement("span");
    path.setAttribute("class", "path");
    path.textContent = "root@MohammadYosef:~$ ";
    if (isBash){
        div.setAttribute("class", "type2");
        i.setAttribute("class", "fas fa-angle-right icone");
        mensagem.setAttribute("class", "sucess");
        
    }
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    if(isBash) div.appendChild(path); 
    div.appendChild(mensagem);
    app.appendChild(div);
  }

export function scanf_promise(isBash = false) {
    return new Promise((resolve) => {
        newInputField(isBash);
        addInputListener();

        function checkInput() {
            if (isValidInput) {
                removeInputListener();
                addValueToScreen(savedInput, isBash);
                removeInputField(isBash);
                isValidInput = false;
                resolve(savedInput);
            } else {
                requestAnimationFrame(checkInput);
            }
        }

        checkInput();
    });
}
