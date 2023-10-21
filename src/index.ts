import './scss/master.scss';
import bash from './bin/bash';
import { setIp } from './utils/utils';

const app: HTMLElement | null = document.querySelector('#app');

// global event listener
app?.addEventListener('click', event => {
	const input = document.querySelector('input') as HTMLInputElement;
	if (!input) return;
	const end = input.value.length;
	input.focus();
  	input.setSelectionRange(end, end);
});

// on load fetch ip address of the user and store it in global variable
fetch('https://api.ipify.org?format=json').then(res => res.json().then(data => setIp(data.ip)));

// start the bash shell with the app element this is the main loop of the terminal
bash(app);

