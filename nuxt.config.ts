// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'nuxt-gtag',
		'@pinia/nuxt',
	],
	gtag: {
		id: 'G-JF2ZGKT7MM',
	},
	experimental: {
		inlineSSRStyles: false,
	},
	ui: {
		icons: 'all',
	},
	image: {
		screens: {
			'xs': 48,
			'sm': 128,
			'md': 320,
			'lg': 1024,
			'xl': 1280,
			'xxl': 1536,
			'2xl': 1536,
		},
		domains: [
			'i.dawnlab.me',
			'xiaoshuapp.com',
			'lib.xiaoshuapp.com',
			'ipfs.xlog.app',
			'cdn.dribbble.com',
			'cdnv2.ruguoapp.com',
			'p3.music.126.net',
			'p4.music.126.net',
			'picx.zhimg.com',
			'nexmoe.com',
		],
		quality: 90,
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
