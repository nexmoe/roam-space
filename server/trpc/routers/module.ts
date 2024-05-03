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
	search: publicProcedure
		.input(
			z.object({
				query: z.string(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const prisma = ctx.prisma
			const { query } = input
			return prisma.module.findMany({
				where: {
					OR: [
						{ title: { contains: query } },
						{ content: { contains: query } },
					],
				},
			})
		}),
})
