import './scss/master.scss';
import bash from './bin/bash';
import { setIp } from './utils/utils';
const app: HTMLElement | null = document.querySelector('#app');

// global event listener
app?.addEventListener('click', event => {
	const input = document.querySelector('input') as HTMLInputElement;
	const end = input.value.length;
	input.focus();
  	input.setSelectionRange(end, end);
});

// document?.addEventListener('keydown', event => {
// 	// check for ctrl + c 
// 	if (event.ctrlKey && event.key === 'c') {
// 		throw new Error('terminated by user');
// 	}
// });

fetch('https://api.ipify.org?format=json').then(res => res.json().then(data => setIp(data.ip)));
bash(app);

