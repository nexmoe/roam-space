import { publicProcedure, router } from '../trpc'
import type { Props as SocialProps } from '~/components/Social.vue'

interface Menu {
	title: string
	url: string
}

interface Config {
	title: string
	avatar: string
	description: string
	tags?: []
	menus?: Menu[]
	socials?: SocialProps[]
}

export const configRouter = router({
	get: publicProcedure
		.query(async ({ ctx }) => {
			const res = await ctx.prisma.config.findMany()
			const singleObject = Object.fromEntries(res.map(item => [item.key, item.value || item.json]))

			return singleObject as unknown as Config
		}),
})
