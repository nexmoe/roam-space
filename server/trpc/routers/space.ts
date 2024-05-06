import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export default router({
	get: publicProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const prisma = ctx.prisma
			const { id } = input

			const space = prisma.space.findUnique({
				where: { id },
				include: {
					flows: {
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
		}),
})
