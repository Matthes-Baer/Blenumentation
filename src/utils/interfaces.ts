export interface listItemInterface {
	id: number;
	name: string;
}

export interface storeListInterface<T> {
	id: string;
	name: T;
	significance: number;
}
