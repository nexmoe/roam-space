import type { API } from '@prisma/client'
import type { NModule } from './types'

// Assuming adapters is a module with adapter functions named after the adapter type.
import * as adapters from './adapters'

// Define a type for the adapter functions to improve type safety
type AdapterFunction = (api: API) => Promise<NModule[]>

// 定义一个映射类型来约束 adapters 中的函数
type AdaptersMap = {
	[key in keyof typeof adapters]: AdapterFunction;
}

// 确保 adapters 符合这个映射类型
const typedAdapters: AdaptersMap = adapters

export default async function fetchModules(api: API): Promise<NModule[]> {
	// 使用类型断言替代 any，因为我们已经通过 AdaptersMap 确保了类型安全
	const adapter: AdapterFunction | undefined = typedAdapters[api.adapter as keyof typeof typedAdapters]

	if (typeof adapter === 'function') {
		const items: NModule[] = await adapter(api)
		return items
	}
	else {
		throw new TypeError(`Adapter function for ${api.adapter} is not available.`)
	}
}
