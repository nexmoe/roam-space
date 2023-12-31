import useConfig from '~/composables/config/useConfig'
import type { Item } from '~/composables/filter/types'
import useAdapter from '~/composables/filter/useAdapter'
import { serverSupabaseClient } from '#supabase/server'

function mergeArrays(a: Item[], b: Item[]) {
	for (const ele of b) {
		const item = a.find(v => v.title === ele.title)

		if (!item) {
			a.push(ele)
		}
		else if (Array.isArray(ele.platform)) {
			for (const platform of ele.platform) {
				if (!item.platform?.includes(platform)) {
					if (!item.platform)
						item.platform = []
					item.platform.push(platform)
				}
			}
		}
	}

	a.sort((a, b) => {
		const dateA = new Date(a.date).valueOf()
		const dateB = new Date(b.date).valueOf()
		return dateB - dateA
	})

	return a
}

export default defineEventHandler(async (event) => {
	const name = decodeURI(getRouterParam(event, 'name') || '')
	const { flow: flows } = useConfig()
	const flow = flows.find(f => f.title === name)
	if (!flow || !flow.api) {
		setResponseStatus(event, 404)
		return {
			code: -1,
			message: 'Flow not found or flow is empty',
			data: [],
			ts: Date.now(),
		}
	}

	const tasks = flow.api.map((api) => {
		return (async () => {
			const data = await $fetch<Record<string, any>>(api.url, {
				method: 'GET',
				parseResponse: JSON.parse,
			})
			return useAdapter(api.adapter, data).slice(0, 8)
		})()
	})
	const res = await Promise.allSettled(tasks)

	const client = await serverSupabaseClient(event)

	const res1 = await client
		.from('module')
		.select('*')

	console.log(res1)
	const response = res.flatMap(r => r.status === 'fulfilled' ? [r.value] : [])
	return {
		code: 0,
		message: 'ok',
		data: response.reduce(mergeArrays, []),
		ts: Date.now(),
	}
})
