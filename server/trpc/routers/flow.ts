import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { flowingByFlowId } from '~/server/flowing'

export const flowRouter = router({
	list: publicProcedure
		.query(async ({ ctx }) => {
			const prisma = ctx.prisma

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
		}),
	get: publicProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const prisma = ctx.prisma
			const { id } = input

			const flow = prisma.flow.findUnique({
				where: { id },
				include: {
					module: {
						orderBy: { date: 'desc' },
					},
				},
			})

			if (flow.module.length === 0 && id) {
				flowingByFlowId(id)
				return
			}

			return flow
		}),
})
