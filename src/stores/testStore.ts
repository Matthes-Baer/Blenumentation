import { writable } from 'svelte/store';
import type { storeListInterface } from 'src/utils/interfaces';

// This approach would just create a store without further specifying which functions are connected
// export const testStore = writable(['test1', 'test2', 'test3']);

const initialValue: storeListInterface<string>[] = [
	{ id: '1', name: 'firstTest', significance: 2.5 }
];

// This approach actually allows to specify which functions one would like to use in order to adjust the testStore data (similar coding results as reducers in React Redux I think)
const createTestStore = () => {
	const { subscribe, set, update } = writable<storeListInterface<string>[]>(initialValue);

	const addNewTestData = (inputObject: storeListInterface<string>) => {
		if (inputObject.name.length > 3) {
			update((e) => [...e, inputObject]);
			return;
		}
		alert('input name length not sufficient! (min 4 characters)');
	};

	// const deleteCurrentEntry = (id: number) => {
	// 	update((e) => {
	// 		e.splice(id, 1);
	// 		return e;
	// 	});
	// };

	return {
		subscribe,
		set,
		update,
		addNewTestData
		// deleteCurrentEntry
	};
};

export const testStore = createTestStore();
