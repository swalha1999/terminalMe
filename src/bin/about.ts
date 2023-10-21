import { println, scanf, printnln, delay } from '../utils/utils';
import { figletHelp, figlet } from './figlet';

export async function about(args: string[] = []): Promise<void> {
	println(await figletHelp(['Hello World!']), 'red');
	println('My name is Muhammad Swalha, I\'m a software developer.');
	println('I\'m a Computer Science student and I\'m currently working at Google TLV as a Software Engineer Intern.');
	println('I\'m passionate about programming and I love to learn new things.');
	println('I\'m a fast learner, I\'m a team player and I\'m a hard worker.');
}

export async function banner(args: string[] = []): Promise<void> {
	for (let i = 0; i < 200; i++) {
		printnln(`${i} -> `, 'red');
		await delay(5);
	}
	printnln('200', 'green');
}
