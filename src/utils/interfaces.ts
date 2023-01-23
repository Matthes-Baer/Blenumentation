export interface listItemInterface {
	id: number;
	name: string;
}

export interface storeListInterface<T> {
	id: string;
	name: T;
	significance: number;
}

export interface ThirdPartSingleTileDataInterface {
	id: number;
	title: string;
	png: string;
	webp: string;
	description: string;
}
