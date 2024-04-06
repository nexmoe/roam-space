import type { API } from '@prisma/client'
import type { NModule } from './types'

interface Swo {
	source: string
	key: string
	failed: boolean
	count: number
}

export async function swo(api: API): Promise<NModule[]> {
	// const path = extractPlatformUsername(api.url)
	// console.log(path)
	const data = await $fetch<Swo>(`https://api.swo.moe/stats/${api.url}`)

	return [
		{
			title: 'Swo',
			url: api.url,
			image: '23',
			content: String(data?.count),
			date: new Date().toISOString(),
		},
	]
}
