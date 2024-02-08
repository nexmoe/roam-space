import type { NModule } from './types'
import * as adapters from './adapters'

export default function (type: string, data: any) {
	const items: NModule[] = (adapters as any)[type](data)
	return items
}
