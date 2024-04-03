import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	runtimeConfig: {
		version: '0.0.1',
	},
	modules: [
		'nuxt-svgo',
		'@nuxt/image',
		'nuxt-scheduler',
		'@nuxtjs/google-fonts',
		'shadcn-nuxt',
		// '@nuxtjs/i18n',
		// '@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui'
	},
	extends: ['@sidebase/core'],
	image: {
		format: ['webp'],
		quality: 80,
		domains: ['p3-juejin.byteimg.com', 'sns-webpic-qc.xhscdn.com'],
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
