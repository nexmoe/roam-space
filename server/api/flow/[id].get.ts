import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context

	const flow = prisma.flow.findUnique({
		where: { id: params?.id },
		include: {
			module: {
				orderBy: { date: "desc" },
			},
		},
	})

	for (const module of flow.module)
			module.platform = JSON.parse(module.platform)

	return flow
})
