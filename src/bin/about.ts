import { println, scanf, printnln, delay } from '../utils/utils';
import { figletHelp, figlet } from './figlet';
import * as bin from './index';


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

export const allc = async (args: string[]): Promise<void> => {
  const commands = Object.keys(bin).sort()
.join(', ');
  println(`Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`);
};

export const email = async (args: string[]): Promise<void> => {
  window.open('mailto:mohamd514.m@gmail.com');
  navigator.clipboard.writeText('mohamd514.m@gmail.com');
  println('Opening mailto:mohamd514.m@gmail.com and copied to clipboard.');
};


export const cv = async (args?: string[]): Promise<void> => {
  window.open('https://docs.google.com/document/d/11VdFwvsqrj2-j_tErwOoT7EcldT82h0QnSI6wPzHhoM/edit?usp=sharing');
  println('Opening CV...');
};

export const sudo = async (args?: string[]): Promise<void> => {
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  println(`Permission denied: unable to run the command '${args ? args[0] : ''}' as root.`);
};

export const repo = async (args?: string[]): Promise<void> => {
  setTimeout(() => {
    window.open('https://github.com/swalha1999/terminalMe', '_blank');
  }, 300);

  println('Opening repository...');
};

export const gassan = async (args?: string[]): Promise<void> => {
  println('Gassan is gay');
};

export const cshaifa = async (args?: string[]): Promise<void> => {
  setTimeout(() => {
    window.open('https://drive.google.com/drive/folders/10hxbAc4E2qUSopuwe-XOOnxyC8mMaa81?usp=sharing');
  }
    , 1000);
  println('Opening cs-haifa...');
};
