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
	name: string;
	png: string;
}
