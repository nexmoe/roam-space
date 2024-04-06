import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context

	const space = prisma.space.findUnique({
		where: { id: params?.id },
		include: {
			flow: {
				orderBy: { index: 'asc' },
				include: {
					module: {
						take: 9,
						orderBy: { date: 'desc' },
					},
				},
			},
		},
	})

	return space
})
