import type { Options, ObserverEventDetails } from 'svelte-inview';

//? In combination with svelte-inview logic
export const onEnter = ({ detail }: CustomEvent<ObserverEventDetails>, title: string) => {
	console.log(detail, title);
};

export const onLeave = ({ detail }: CustomEvent<ObserverEventDetails>) => {
	console.log(detail);
};
