import './scss/master.scss';
import bash from './bin/bash';
import { setIp } from './utils/utils';
const app: HTMLElement | null = document.querySelector('#app');

// global event listener
app?.addEventListener('click', event => {
	const input = document.querySelector('input');
	input?.focus();
});

fetch('https://api.ipify.org?format=json').then(res => res.json().then(data => setIp(data.ip)));

bash(app);
