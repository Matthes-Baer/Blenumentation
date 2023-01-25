import { persisted } from 'svelte-local-storage-store';

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const basicsPartProgressStore = persisted('basicsPartProgress', {
	First: false,
	Second: false
});

export const materialsPartProgressStore = persisted('materialsPartProgress', {});
