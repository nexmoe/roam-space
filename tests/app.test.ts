import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'
import { expectNoClientErrors } from './utils'

await setup({
	server: true,
	browser: true,
})

describe('app', () => {
	it('renders home page', async () => {
		const html = await $fetch('/')

		// Shows expected text
		expect(html).toContain('Copyright')

		await expectNoClientErrors('/')
	})
})
