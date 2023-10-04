const app: HTMLElement | null = document.querySelector('#app');
let savedInput = '';
let isValidInput = false;

export function delay(ms: number): Promise<void> {
	return new Promise(res => setTimeout(res, ms));
}

export function println(text: string, classname: string | undefined = undefined): void {
	const p: HTMLParagraphElement = document.createElement('p');
	if (classname) {
		p.className = classname;
	}
	p.innerHTML = text;
	app?.appendChild(p);
}

export function printnln(text: string, classname: string | undefined = undefined): void {
	const p: HTMLSpanElement = document.createElement('span');
	if (classname) {
		p.className = classname;
	}
	p.innerHTML = text;
	app?.appendChild(p);
}

export function newIine(): void {
	const p: HTMLElement = document.createElement('p');
	app?.appendChild(p);
}

function saveInput(event: KeyboardEvent): void {
	if (event.key === 'Enter') {
		savedInput = (document.querySelector('input') as HTMLInputElement)
			.value;
		isValidInput = true;
	}
}

function addInputListener(): void {
	document.addEventListener('keypress', saveInput);
}

function removeInputListener(): void {
	document.removeEventListener('keypress', saveInput);
}

function newInputField(isBash = false): void {
	const div: HTMLElement = document.createElement('div');
	div.setAttribute('class', 'inlineInput');
	const input: HTMLInputElement = document.createElement('input');
	input.type = 'text';
	input.autofocus = true;
	div.appendChild(input);
	while (app?.lastChild !== null && app?.lastChild.nodeName === 'SPAN')  {
		const lastChild = app?.lastChild;
		app?.removeChild(lastChild);
		div.insertBefore(lastChild as Node, div.firstChild);
	}
	app?.appendChild(div);
	input.focus();
}


function removeInputField(): void {
	const input: HTMLInputElement | null = document.querySelector('input');
	input?.parentElement?.removeChild(input);
}

function addValueToScreen(value: string): void {
	if (value === '') return;
	const div: HTMLElement = document.createElement('section');
	const i: HTMLElement = document.createElement('i');
	const mensagem: HTMLHeadingElement = document.createElement('h2');
	mensagem.textContent = `${value}`;
	div.appendChild(i);
	div.appendChild(mensagem);
	app?.appendChild(div);
}

export function scanf_promise(): Promise<string> {
	return new Promise(resolve => {
		newInputField();
		addInputListener();

		function checkInput() {
			if (isValidInput) {
				removeInputListener();
				addValueToScreen(savedInput);
				removeInputField();
				isValidInput = false;
				resolve(savedInput);
			} else {
				requestAnimationFrame(checkInput);
			}
		}

		checkInput();
	});
}

export function clearScreen(){
	while (app?.hasChildNodes()) {
		app?.removeChild(app.firstChild as Node);
	}
}
