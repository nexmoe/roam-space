import { publicProcedure, router } from '../trpc'
import type { Props as SocialProps } from '~/components/Social.vue'
import defaultData from '~/config/hero.json'

interface PrismaConfigItem {
	key: keyof Config
	value?: string
	json?: any
}

interface Config {
	avatar: string
	description: string
	tags?: string[]
	menus?: Menu[]
	socials?: SocialProps[]
	siteUrl: string
	siteName: string
	siteDescription: string
}

interface Menu {
	title: string
	url: string
}

type PrismaConfigToConfigMap = {
	[K in keyof Config]: PrismaConfigItem['value'] | PrismaConfigItem['json'];
}

export default router({
	get: publicProcedure.query(async ({ ctx }) => {
		const res = await ctx.prisma.config.findMany()

		const prismaConfigMap: Partial<PrismaConfigToConfigMap> = Object.fromEntries(
			res.map(item => [item.key, item.value || item.json]),
		)

		const defaultConfig = defaultData as Config

		// 确保合并后的对象包含 Config 中的所有必需属性
		const mergedConfig: Config = {
			...defaultConfig,
			...(prismaConfigMap as Partial<Config>),
		}

		return mergedConfig
	}),
})
