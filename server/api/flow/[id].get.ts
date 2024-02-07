import { consola } from "consola";
import type { H3Event } from 'h3'
import type { Module } from '~/composables/filter/types'
import useAdapter from '~/composables/filter/useAdapter'
import config from '~/config/config.json';

function levenshteinDistance(a: string, b: string) {
	if (a.length === 0)
		return b.length
	if (b.length === 0)
		return a.length

	const matrix = Array.from(Array(a.length + 1), () =>
		Array(b.length + 1).fill(0))

	for (let i = 0; i <= a.length; i++)
		matrix[i][0] = i

	for (let j = 0; j <= b.length; j++)
		matrix[0][j] = j

	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1
			matrix[i][j] = Math.min(
				matrix[i - 1][j] + 1,
				matrix[i][j - 1] + 1,
				matrix[i - 1][j - 1] + cost,
			)
		}
	}

	return matrix[a.length][b.length]
}

function mergeArrays(a: Module[], b: Module[]) {
	for (const ele of b) {
		const item = a.find((v) => {
			const similarity = 1 - levenshteinDistance(v.title, ele.title) / Math.max(v.title.length, ele.title.length)
			return similarity >= 0.9 // 设置相似度阈值为90%
		})
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

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context

	const flow = await prisma.flow.findFirst({
		where: { id: params?.id },
		include: {
			api: true,
		},
	})
	if (!flow) {
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
			let apiUrlRetry = api.url
			let originIndex = 0
			while (originIndex < config.rsshub.origin.length) {
				apiUrlRetry = apiUrlRetry.includes('{rsshub}') ? apiUrlRetry.replace('{rsshub}', config.rsshub.origin[originIndex]) : apiUrlRetry

				try {
					consola.info(originIndex === 0 ? 'Fetching' : 'Retry fetching', apiUrlRetry)
					const res = await $fetch<Record<string, any>>(apiUrlRetry, {
						method: 'GET',
						parseResponse: JSON.parse,
					})
					consola.success('Success fetching', apiUrlRetry)

					return useAdapter(api.adapter, res).slice(0, 8)
				}
				catch (error) {
					consola.error('Error fetching', apiUrlRetry)
					consola.error(error)
					if (apiUrlRetry.includes('{rsshub}'))
						originIndex++
					else
						break
				}
			}
			throw new Error('All retry attempts failed')
		})()
	})

	const res = await Promise.allSettled(tasks)

	const response = res.flatMap(r => (r.status === 'fulfilled' ? [r.value] : []))
	const final = flow.api.length > 0 ? response.reduce(mergeArrays, []) : response

	// // store to supabase
	// const { error } = await supabase
	// 	.from('module')
	// 	.insert(final)
	// 	.select()
	// console.error(error)

	return {
		code: 0,
		message: 'ok',
		data: final,
		ts: Date.now(),
	}
})
