import type { API } from '@prisma/client';
import type { NModule } from './types';

// Assuming adapters is a module with adapter functions named after the adapter type.
import * as adapters from './adapters';

// Define a type for the adapter functions to improve type safety
type AdapterFunction = (api: API) => Promise<NModule[]>;

export default async function fetchModules(api: API): Promise<NModule[]> {
	// Ensure that the adapter function exists and is callable
	const adapter: AdapterFunction | undefined = (adapters as any)[api.adapter];
	if (typeof adapter === 'function') {
		const items: NModule[] = await adapter(api);
		return items;
	} else {
		throw new TypeError(`Adapter function for ${api.adapter} is not available.`);
	}
}