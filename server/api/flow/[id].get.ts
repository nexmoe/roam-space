import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context
	return prisma.flow.findFirst({
		where: { id: params?.id },
		include: {
			module: true,
		},
	})
})
