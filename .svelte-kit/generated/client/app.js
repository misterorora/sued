export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/announcements": [3],
		"/announcements/[slug]": [4],
		"/contact": [5],
		"/gallery": [6],
		"/impressum": [7],
		"/rules": [8],
		"/teams": [9],
		"/training": [10],
		"/training/friday": [11],
		"/training/monday": [12],
		"/training/saturday": [13],
		"/training/sunday": [14],
		"/training/thursday": [15],
		"/training/tuesday": [16],
		"/training/wednesday": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';