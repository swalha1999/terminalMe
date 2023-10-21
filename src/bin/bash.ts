import { println, scanf, clearScreen, delay, createCode, printnln, getIp, newLine } from '../utils/utils';
import * as bin from '../bin';


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
	if (event.key === 'ArrowUp' && commandIterator > 0) commandIterator--;
	else if (event.key === 'ArrowDown' && commandIterator < commandHistory.length - 1) commandIterator++;
	else return;
	const input: HTMLInputElement | null = document.querySelector('input');
	if (!input) return;
	input.focus();
	input.value = commandHistory[commandIterator];
}

async function bashStartup(app: HTMLElement): Promise<void> {
	await bashWelcome();
	bashMainLoop(app);
}

async function bashWelcome(): Promise<void> {
	// await bin.banner();
	await bin['about']([]);
	newLine();
	println('Starting the server...');
	await delay(500);
	newLine();
	println('You can run several commands:');
	createCode('about', 'Who am I and what do I do.');
	createCode('help or -h', 'See all commands.');
	createCode('social -a', 'All my social networks.');
	await delay(500);
}

async function bashMainLoop(app: HTMLElement): Promise<void> {

	while (true) {
		printnln('swalha@Falc0n', 'green');
		printnln(':');
		printnln('~/terminalMe', 'blue');
		printnln('$ ');
		const fullCommand: string = await scanf();
		const command: string = fullCommand.split(' ')[0];
		const args: string[] = fullCommand.split(' ').slice(1);
		app.removeEventListener('keydown', commandHistoryEventHandler);
		if (commandHistory[commandHistory.length - 1] !== fullCommand) {
			commandHistory.push(fullCommand);
		}
		commandIterator = commandHistory.length;
		switch (command) {
			case 'clear':
			  await clearScreen();
			  break;
			case '':
			  break;
			default: {
			  if (Object.keys(bin).indexOf(command) === -1) {
				println(`bash: ${command}: command not found`);
			  } else {
				try {
					//	@ts-ignore
					await bin[command](args);
				} catch (error) {
					println(`bash: ${command}: error while executing command`);
					println(String(error));
				}
			  }
			}
		}
		app.addEventListener('keydown', commandHistoryEventHandler);
	}
}


