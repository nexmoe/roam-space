import type { H3Event } from 'h3'
import type { Modulex } from '~/composables/adapter/types'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context
	const res = await prisma.module.findFirst({
		where: { id: params?.id },
	})
	const modulex = { ...res, platform: JSON.parse(res?.platform || '[]') } as Modulex
	return modulex
})
