import type { H3Event } from 'h3'
import { flowingByFlowId } from '~/server/flowing'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	const { params } = event.context

	const flow = prisma.flow.findUnique({
		where: { id: params?.id },
		include: {
			module: {
				orderBy: { date: 'desc' },
			},
		},
	})

	if (flow.module.length === 0 && flow.id) {
		flowingByFlowId(flow.id)
		return
	}

	return flow
})
