import { persisted } from 'svelte-local-storage-store';
import type { MaterialsPartProgressStoreInterface } from '../utils/interfaces';

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const basicsPartProgressStore = persisted('basicsPartProgress', {
	First: false,
	Second: false
} as { First: boolean; Second: boolean });

export const materialsPartProgressStore = persisted('materialsPartProgress', {
	ShadingWorkspaceSelection: false
} as MaterialsPartProgressStoreInterface);
