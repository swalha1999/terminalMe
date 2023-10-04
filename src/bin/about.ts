import { println, scanf_promise, printnln } from '../utils/utils';

export async function printName(): Promise<void> {
	for (let i = 0; i < 10; i++) {
		printnln(i+" ");
	}
}

export async function printlnName(): Promise<void> {
	for (let i = 0; i < 10; i++) {
		println(i+" ");
	}
}

