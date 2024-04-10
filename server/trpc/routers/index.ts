import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import config from './config'
import { flowRouter } from './flow'
import module from './module'

export const appRouter = router({
	hello: publicProcedure
		.input(
			z.object({
				text: z.string().nullish(),
			}),
		)
		.query(({ input }) => {
			return {
				greeting: `hello ${input?.text ?? 'world'}`,
			}
		}),
	config,
	flow: flowRouter,
	module,
})

// export type definition of API
export type AppRouter = typeof appRouter
