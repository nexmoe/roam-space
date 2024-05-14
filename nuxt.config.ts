import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	runtimeConfig: {
		version: '0.0.1',
		s3: {
			endpoint: '',
			bucket: '',
			accessKeyId: '',
			secretAccessKey: '',
		},
	},

	routeRules: {
		// generated on demand, revalidates in background, cached until API response changes
		'/': { swr: true },
		'/flow/**': { swr: true },
		'/space': { swr: true },
		'/space/**': { swr: true },
		// Admin dashboard renders only on client-side
		'/admin/**': { ssr: false },
		// Add cors headers on API routes
		'/api/**': { cors: true },
	},

	build: {
		transpile: ['trpc-nuxt'],
	},

	webVitals: {
		ga: { id: 'G-JF2ZGKT7MM' },
	},

	gtag: {
		id: 'G-JF2ZGKT7MM',
	},

	modules: [
		'nuxt-svgo',
		'@nuxt/image',
		'nuxt-scheduler',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@nuxtjs/seo',
		'@nuxtjs/tailwindcss',
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// 自动引入 `defineStore()`
					'defineStore',
				],
			},
		],
		'@nuxtjs/html-validator',
		'@nuxtjs/web-vitals',
		'nuxt-gtag',
		'@nuxt/eslint',
		'@vueuse/nuxt',
		'@nuxtjs/i18n',
	],

	i18n: {
		locales: [
			{
				code: 'zh-CN',
				file: 'zh-CN.json',
				name: '简体中文',
			},
		],
		defaultLocale: 'zh-CN',
		lazy: true,
		langDir: 'locales/',
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},

	shadcn: {
		/**
			* Prefix for all the imported component
			*/
		prefix: '',
		/**
			* Directory that the component lives in.
			* @default "./components/ui"
			*/
		componentDir: './components/ui',
	},

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

	image: {
		format: ['webp'],
		quality: 85,
		domains: [
			'p3-juejin.byteimg.com',
			'sns-webpic-qc.xhscdn.com',
			'picx.zhimg.com',
			'image.coolapk.com',
			'pic1.zhimg.com',
			'pic2.zhimg.com',
			'pic3.zhimg.com',
			'pic4.zhimg.com',
			'unavatar.io',
			'i.dawnlab.me',
			'ipfs.crossbell.io',
			'space.r2.102415.xyz',
		],
	},

	googleFonts: {
		families: {
			'Noto Serif SC': true,
			'Zhi Mang Xing': true,
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

	devtools: {
		timeline: {
			enabled: true,
		},
	},
})
