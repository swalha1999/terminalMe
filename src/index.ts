import './scss/master.scss';
import bash from './bin/bash';
const app: HTMLElement | null = document.querySelector('#app');

// global event listener
app?.addEventListener('click', event => {
	const input = document.querySelector('input');
	input?.focus();
});

bash(app);
