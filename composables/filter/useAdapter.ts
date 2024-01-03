import type { Module } from './types'
import * as adapters from './adapters'

export default function (type: string, data: any) {
	const items: Module[] = (adapters as any)[type](data)
	return items
}
