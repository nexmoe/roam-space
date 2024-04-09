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

			return prisma.module.findUnique({
				where: { id },
			})
		}),
})
