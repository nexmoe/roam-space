import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	runtimeConfig: {
		version: '0.0.1',
	},
	build: {
		transpile: ['trpc-nuxt'],
	},
	modules: [
		'nuxt-svgo',
		'@nuxt/image',
		'nuxt-scheduler',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxtjs/seo',
		'@nuxtjs/tailwindcss',
	],
	ogImage: {
		googleFontMirror: true,
		fonts: [
			// will load the Noto Sans font from Google fonts
			'Noto+Serif+SC',
		],
	},
	site: {
		url: 'https://i.nexmoe.com',
		name: 'Nexmoe',
		description: '充满热情的开发者和创造者，热衷于未来主义和赛博朋克，追求良好的用户体验和界面设计。分享技术见解、优化技巧和对生活的热爱，提供有价值的内容和工具，通过技术改善日常生活。',
	},
	sitemap: {
		sitemaps: {
			categories: {
				sources: [
					'/api/__sitemap__/urls/categories',
				],
			},
		},
	},
	extends: ['@sidebase/core'],
	image: {
		format: ['webp'],
		quality: 80,
		domains: [
			// 'p3-juejin.byteimg.com',
			// 'sns-webpic-qc.xhscdn.com',
			// 'cdn.dribbble.com',
			// 'picx.zhimg.com',
			// 'img.zcool.cn',
		],
	},
	googleFonts: {
		families: {
			'Noto Serif SC': true,
		},
	},
	typescript: {
		shim: false,
	},
	imports: {
		dirs: [
			// Scan top-level modules
			'composables',
			// ... or scan modules nested one level deep with a specific name and file extension
			'composables/*/index.{ts,js,mjs,mts}',
			// ... or scan all modules within given directory
			'composables/**',
		],
	},
})
