import type { H3Event } from 'h3'
import { flowingByFlowId } from '~/server/flowing'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma

	const flows = await prisma.flow.findMany({
		include: {
			module: {
				take: 9,
				orderBy: { date: 'desc' },
			},
		},
		orderBy: { index: 'asc' },
	})

	for (const flow of flows) {
		if (flow.module.length === 0 && flow.id)
			flowingByFlowId(flow.id)
	}

	return flows
})
