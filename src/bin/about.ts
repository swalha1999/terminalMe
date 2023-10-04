import { println, scanf_promise, printnln } from '../utils/utils';

export async function printName(): Promise<void> {
	printnln(`	 _   _      _ _       
	| | | | ___| | | ___  
	| |_| |/ _ \ | |/ _ \ 
	|  _  |  __/ | | (_) |
	|_| |_|\___|_|_|\___/ `);
}


export async function printlnName(): Promise<void> {
	println(`	 _   _      _ _       
	| | | | ___| | | ___  
	| |_| |/ _ \\ | |/ _ \\ 
	|  _  |  __/ | | (_) |
	|_| |_|\\___|_|_|\\___/ `);
}

