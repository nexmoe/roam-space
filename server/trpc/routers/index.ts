import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { configRouter } from './config'
import { flowRouter } from './flow'

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
    config: configRouter,
    flow: flowRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
