import { Item } from "./types";
import * as adapters from "./adapters";

export default function (type: string, data: any) {
	const items: Item[] = (adapters as any)[type](data);
	return items;
}
