import { consola } from 'consola'
import { type API, type Flow, PrismaClient } from '@prisma/client'
import type { NModule } from '~/composables/adapter/types'
import useAdapter from '~/composables/adapter/useAdapter'
import config from '~/config/config.json'

const prisma = new PrismaClient()

/**
 * 计算两个字符串之间的Levenshtein距离。
 * Levenshtein距离是一个字符串相似度的度量，表示从一个字符串转换成另一个字符串所需的最少编辑操作次数（插入、删除或替换字符）。
 *
 * @param a 字符串a，作为比较的基准。
 * @param b 字符串b，与字符串a进行比较。
 * @returns 两个字符串之间的Levenshtein距离，返回一个数字。
 */
function levenshteinDistance(a: string, b: string): number {
	// 当其中一个字符串为空时，直接返回另一个字符串的长度作为距离
	if (a.length === 0)
		return b.length
	if (b.length === 0)
		return a.length

	// 创建一个矩阵用于存储计算过程中的距离值
	const matrix = Array.from(Array(a.length + 1), () =>
		Array(b.length + 1).fill(0))

	// 初始化矩阵的第一列和第一行，分别表示从空字符串到字符串a和字符串b的距离
	for (let i = 0; i <= a.length; i++)
		matrix[i][0] = i
	for (let j = 0; j <= b.length; j++)
		matrix[0][j] = j

	// 动态规划计算矩阵中每个位置的最小距离
	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			// 计算当前字符替换、插入或删除的代价
			const cost = a[i - 1] === b[j - 1] ? 0 : 1
			matrix[i][j] = Math.min(
				matrix[i - 1][j] + 1, // 插入操作
				matrix[i][j - 1] + 1, // 删除操作
				matrix[i - 1][j - 1] + cost, // 替换操作
			)
		}
	}

	// 返回最终两个字符串的Levenshtein距离
	return matrix[a.length][b.length]
}

/**
 * 合并两个 NModule 类型的数组，并且根据标题的相似度进行合并，以及根据日期进行排序。
 * @param a 第一个 NModule 类型的数组。
 * @param b 第二个 NModule 类型的数组。
 * @returns 返回一个合并后的 NModule 类型的数组。
 */
function mergeArrays(a: NModule[], b: NModule[]): NModule[] {
	// 遍历 b 数组中的每个元素，尝试在 a 数组中找到相似度达到 90% 及以上的元素
	for (const ele of b) {
		const item = a.find((v) => {
			// 计算两个标题的相似度
			const similarity = 1 - levenshteinDistance(v.title, ele.title) / Math.max(v.title.length, ele.title.length)
			// 返回相似度达到阈值的元素
			return similarity >= 0.9
		})
		// 如果 a 中没有与 b 中当前元素相似的元素，则将当前元素加入到 a 中
		if (!item) {
			a.push(ele)
		}
		else if (Array.isArray(ele.platform)) {
			// 如果 b 中当前元素含有平台信息，并且这些平台信息在 a 中对应的元素中不存在，则添加到 a 中对应的元素的平台信息里
			for (const platform of ele.platform) {
				if (!item.platform?.includes(platform)) {
					if (!item.platform)
						item.platform = [] as string[]
					item.platform.push(platform)
				}
			}
		}
	}

	// 根据日期对合并后的数组进行降序排序
	a.sort((a, b) => {
		const dateA = new Date(a.date).valueOf()
		const dateB = new Date(b.date).valueOf()
		return dateB - dateA
	})

	return a
}

/**
 * 异步插入或更新一个模块。
 * @param ele NModule类型的对象，包含模块的详细信息。
 * @param flowId 字符串类型的流程ID，用于标识模块所属的流。
 * @returns 无返回值。
 */
async function upsert(ele: NModule, flowId: string) {
	// 尝试根据URL和flowId查找已存在的模块
	const res = await prisma.module.findFirst({
		where: {
			OR: [
				{ url: ele.url, flowId },
				{
					platform: {
						has: ele.url,
					},
					flowId,
				},
			],
		},
	})

	// 如果找到已存在的模块，则打印信息并更新
	if (res) {
		consola.info(`Exists: ${ele.title}`)
		await prisma.module.update({
			where: {
				id: res.id,
			},
			data: {
				title: ele.title,
				content: ele.content,
				image: ele.image,
				date: ele.date,
			},
		})
		return
	}

	// 如果未找到已存在的模块，则打印成功消息并尝试插入新模块
	consola.success(`Add: ${ele.title}`)
	try {
		await prisma.module.create({
			data: {
				...ele,
				date: ele.date || new Date().toISOString(),
				flowId,
			},
		})
	}
	catch (error) {
		consola.error(error)
	}
}

/**
 * 根据指定的 flow 异步执行数据抓取和处理任务。
 * @param flow 一个包含API信息和配置的对象。
 *
 * 该函数首先会遍历流程中的每一个API，针对每个API执行以下步骤：
 * 1. 尝试使用给定的API URL进行数据抓取，URL中包含的'{rsshub}'会被配置中的rsshub.origin替换。
 * 2. 若抓取成功，则返回抓取到的数据适配器。
 * 3. 若抓取失败，则根据URL是否包含'{rsshub}'来决定是否重试，重试时会尝试下一个rsshub.origin中的URL。
 * 4. 若所有重试均失败，抛出错误。
 *
 * 对于所有成功抓取的数据适配器，将它们保存到数据库中的module表。
 */
async function flowingByFlow(flow: Flow) {
	const tasks = flow.api.map((api: API) => {
		return (async () => {
			let originIndex = 0
			while (originIndex < config.rsshub.origin.length) {
				api.url = api.url.includes('{rsshub}') ? api.url.replace('{rsshub}', config.rsshub.origin[originIndex]) : api.url

				try {
					consola.info(originIndex === 0 ? 'Fetching' : 'Retry fetching', api.url)

					const adapter = await useAdapter(api)
					consola.success('Success fetching', api.url)

					return adapter
				}
				catch (error) {
					consola.error('Error fetching', api.url)
					consola.error(error)
					if (api.url.includes('{rsshub}'))
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
	const final: NModule[] = flow.api.length > 0 ? response.reduce(mergeArrays, []) : []
	for (const ele of final)
		upsert(ele, flow.id)
}

export async function flowing() {
	consola.info('Flowing started')
	const flows = await prisma.flow.findMany({
		include: {
			api: true,
		},
	})
	for (const flow of flows)
		await flowingByFlow(flow)

	consola.success('Flowing end')
}

export async function flowingByFlowId(flowId: string) {
	const flow = await prisma.flow.findUnique({
		where: { id: flowId },
		include: {
			api: true,
		},
	})
	if (flow)
		await flowingByFlow(flow)
}
