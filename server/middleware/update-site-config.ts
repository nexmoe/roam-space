// https://trpc-nuxt.vercel.app/get-started/tips/server-side-calls
import { appRouter } from '@/server/trpc/routers'

export default eventHandler(async (e) => {
	const caller = appRouter.createCaller({ prisma: e.context.prisma })

	const config = await caller.config.get()
	// eslint-disable-next-line no-console
	console.log(config.siteName)
	// updateSiteConfig({
	//     name: config.siteName,
	//     description: config.siteDescription,
	//     url: config.siteUrl,
	// })
})
