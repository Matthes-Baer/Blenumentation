import { persisted } from 'svelte-local-storage-store';
import type { MaterialsPartProgressStoreInterface } from '../utils/interfaces';

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const basicsPartProgressStore = persisted('basicsPartProgress', {
	First: false,
	Second: false
} as { First: boolean; Second: boolean });

export const materialsPartProgressStore = persisted('materialsPartProgress', {
	MaterialPropertyView: false,
	ShadingWorkspaceSelection: false,
	ShadingWorkspace: false,
	BackgroundHDRImage: false,
	BackgroundHDRImageChange: false,
	NodeEditor: false,
	MaterialOutputNode: false,
	DiffuseBSDFAndPrincipledBSDF: false,
	HelpWithConnectingNodes: false,
	NodeTypes: false,
	TextureInputs: false,
	RoughnessMapInput: false,
	NormalMapInput: false
} as MaterialsPartProgressStoreInterface);
