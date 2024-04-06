import { publicProcedure, router } from '../trpc'

export const configRouter = router({
	get: publicProcedure
		.query(async ({ ctx }) => {
			const res = await ctx.prisma.config.findMany()
			const singleObject = Object.fromEntries(res.map(item => [item.key, item.value || item.json]))

			return singleObject
		}),
})
