import { println, scanf_promise, clearScreen , delay, createCode, printnln} from '../utils/utils';
import { printName, printlnName } from '../bin/about';
import { cowsay } from './cowsay';
import {figlet} from './figlet';



const commandHistory: string[] = [];
let commandIterator = 0;

export default function bash(app: HTMLElement | null): void {
	if (!app) {
		console.error('there is no element with id "app"');
		return;
	}
	app.addEventListener('keydown', commandHistoryEventHandler);
	bashStartup(app);
}

function commandHistoryEventHandler(event: KeyboardEvent) {
	if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
	const input: HTMLInputElement | null = document.querySelector('input');
	
	if (!input) {
		console.error('there is no input element');
		return;
	}
	
	if (event.key === 'ArrowUp') {
		if (commandIterator > 0) {
			commandIterator--;
			input.value = commandHistory[commandIterator];

		}
	} else if (event.key === 'ArrowDown') {
		if (commandIterator < commandHistory.length - 1) {
			commandIterator++;
			input.value = commandHistory[commandIterator];
		}
	}
}

async function bashStartup(app: HTMLElement): Promise<void> {
	await bashWelcome();
	bashMainLoop(app);
}

async function bashWelcome(): Promise<void> {
	println('Welcome to my website!');
	await delay(1000);
	println('Starting the server...');
	await delay(1000);
	println('You can run several commands:');
	createCode('about', 'Who am I and what do I do.');
	createCode('help or -h', 'See all commands.');
	createCode('social -a', 'All my social networks.');
}

async function bashMainLoop(app: HTMLElement): Promise<void> {
	while (true) {
		printnln('swalha@Falc0n', 'green');
		printnln(':');
		printnln('~/terminalMe', 'blue'); // here we what to print the current directory
		printnln('$ ');
		const command: string = await scanf_promise();
		app.removeEventListener('keydown', commandHistoryEventHandler);
		commandHistory.push(command);
		commandIterator = commandHistory.length;
		if (command === 'print') {
			await printName();
		}
		else if (command === 'println') {
			await printlnName();
		}
		else if (command === 'clear') {
			clearScreen();
		}
		else if (command === 'cowsay') {
			await cowsay();
		}
		else if (command === 'figlet') {
			await figlet(["Hello World"]);
		}

		app.addEventListener('keydown', commandHistoryEventHandler);
	}
}


