import type { Modulex } from './types'
import * as adapters from './adapters'

export default function (type: string, data: any) {
	const items: Modulex[] = (adapters as any)[type](data)
	return items
}
