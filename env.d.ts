// for svgo
declare module '*.svg' {
	import type { DefineComponent } from 'vue'

	const component: DefineComponent
	export default component
}

declare module 'probe-image-size' {
	interface Props {
		width: number
		height: number
		type: string
		mime: string
		wUnits: string
		hUnits: string
		url: string
	}

	export default function probe(url: string): Promise<Props>
}
