import { router } from '../trpc'
import config from './config'
import flow from './flow'
import module from './module'
import space from './space'

export const appRouter = router({
	config,
	flow,
	module,
	space,
})

// export type definition of API
export type AppRouter = typeof appRouter
