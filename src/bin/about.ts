import { println, scanf_promise, printnln } from '../utils/utils';

export async function printName(args: string[]): Promise<void> {
	for(let i = 0; i < 5; i++){
		printnln(`${i} -> `);
	}
}


export async function printlnName(args: string[]): Promise<void> {
	println(`	 _   _      _ _       
	| | | | ___| | | ___  
	| |_| |/ _ \\ | |/ _ \\ 
	|  _  |  __/ | | (_) |
	|_| |_|\\___|_|_|\\___/ `);
}

