import { writable } from 'svelte/store';
import type { storeListInterface } from 'src/utils/interfaces';

// This approach would just create a store without further specifying which functions are connected
// export const testStore = writable(['test1', 'test2', 'test3']);

const initialValue: storeListInterface<string>[] = [
	{ id: '1', name: 'firstTest', significance: 2.5 }
];

// This approach actually allows to specify which functions one would like to use in order to adjust the testStore data (similar coding results as reducers in React Redux I think)
const createTestStore = () => {
	const { subscribe, set, update } = writable(initialValue as storeListInterface<string>[]);

	const addNewTestData = (inputObject: storeListInterface<string>) => {
		if (inputObject.name.length <= 3) {
			alert('input name length not sufficient! (min 4 characters)');
			return;
		}
		update((e) => {
			if (e.length > 10) {
				alert('store array too big');
				return [...e];
			}
			return [...e, inputObject];
		});
	};

	const changeFirstDataEntry = (input: string) => {
		update((e) => {
			let element = e.at(0)!;
			element = { ...element, name: input };
			e.splice(0, 1);
			return [element, ...e];
		});
	};

	const deleteFirstEntry = () => {
		update((e) => {
			e.splice(0, 1);
			return e;
		});
	};

	return {
		subscribe,
		set,
		update,
		addNewTestData,
		changeFirstDataEntry,
		deleteFirstEntry
	};
};

export const testStore = createTestStore();
