import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma

	const flows = await prisma.flow.findMany({
		include: {
			module: {
				take: 9,
				orderBy: { date: "desc" },
			},
		},
	})

	for (const flow of flows) {
		for (const module of flow.module)
			module.platform = JSON.parse(module.platform)
	}

	return flows
})
