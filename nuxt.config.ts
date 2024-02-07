import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
	runtimeConfig: {
		version: '0.0.1',
	},
	modules: ['nuxt-svgo', '@nuxt/ui', '@nuxt/image'],
	extends: ['@sidebase/core'],
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
