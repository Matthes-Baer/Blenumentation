import { writable } from 'svelte/store';

// This approach would just create a store without further specifying which functions are connected
// export const testStore = writable(['test1', 'test2', 'test3']);

// This approach actually allows to specify which functions one would like to use in order to adjust the testStore data (similar coding results as reducers in React Redux I think)
const createTestStore = () => {
	const { subscribe, set, update } = writable(['test1', 'test2', 'test3']);
	const addNewTestData = (inputString: string) => {
		update((e) => [...e, inputString]);
	};

	return {
		subscribe,
		set,
		update,
		addNewTestData
	};
};

export const testStore = createTestStore();
