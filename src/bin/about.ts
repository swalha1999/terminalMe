import { println, scanf, printnln, delay } from '../utils/utils';
import { figletHelp } from './figlet';

export async function banner(args: string[] = []): Promise<void> {
	await delay(10000);
	println(await figletHelp(['Welcome to my website!']));
}

