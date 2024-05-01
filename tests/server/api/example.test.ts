// import { beforeEach, describe, expect, it } from 'vitest'
// import { $fetch, setup } from '@nuxt/test-utils'
// import { faker } from '@faker-js/faker'
// import type { Prisma } from '@prisma/client'
// import { resetDatabase } from '~/prisma/utils'

// await setup({
// 	server: true,
// 	browser: false,
// })

// beforeEach(() => {
// 	resetDatabase()
// })

// describe('/api/example/', () => {
// 	it('gET returns an empty list when no examples exist', async () => {
// 		const result = await $fetch('/api/example')
// 		expect(result).toStrictEqual([])
// 	})
// })

// describe('/api/example/:id', () => {
// 	it('gET returns 404 when id does not exist', async () => {
// 		const result = await $fetch('/api/example/1', {}).catch(error => error.data)
// 		expect(result).toStrictEqual({
// 			message: 'Failed to find example with id 1',
// 			stack: '',
// 			statusCode: 404,
// 			statusMessage: 'Failed to find example with id 1',
// 			url: '/api/example/1',
// 		})
// 	})

// 	it('pUT creates an entity, then GET allows to fetch it', async () => {
// 		// 1. Create the entity and assert that it has the correct shape & values
// 		const exampleToCreate: Prisma.ExampleCreateInput = {
// 			description: faker.lorem.paragraph(),
// 			details: faker.lorem.paragraphs(),
// 		}

// 		const exampleAfterUpsert = await $fetch(`/api/example/${faker.datatype.uuid()}`, {
// 			method: 'PUT',
// 			body: exampleToCreate,
// 		})

// 		expect(Object.keys(exampleAfterUpsert).sort()).toEqual(['id', 'description', 'details'].sort())
// 		expect(exampleAfterUpsert.details).toBe(exampleToCreate.details)
// 		expect(exampleAfterUpsert.description).toBe(exampleToCreate.description)

// 		// 2. Fetch the entity from the GET endpoint
// 		const exampleFromGet = await $fetch(`/api/example/${exampleAfterUpsert.id}`)

// 		expect(exampleFromGet).toStrictEqual(exampleAfterUpsert)
// 	})

// 	it('pUT creates and entity if none exists, then updates it on a second call', async () => {
// 		// 1. Create the entity and assert that it has the correct shape & values
// 		const exampleToCreate: Prisma.ExampleCreateInput = {
// 			description: faker.lorem.paragraph(),
// 			details: faker.lorem.paragraphs(),
// 		}

// 		const exampleAfterUpsert = await $fetch(`/api/example/${faker.datatype.uuid()}`, {
// 			method: 'PUT',
// 			body: exampleToCreate,
// 		})

// 		expect(Object.keys(exampleAfterUpsert).sort()).toEqual(['id', 'description', 'details'].sort())
// 		expect(exampleAfterUpsert.details).toBe(exampleToCreate.details)
// 		expect(exampleAfterUpsert.description).toBe(exampleToCreate.description)

// 		// 2. Update the entity and check if the value has changed
// 		const updatePayload: Prisma.ExampleUpdateInput = { description: faker.lorem.paragraphs(), details: faker.lorem.paragraphs() }
// 		const exampleAfterUpdate = await $fetch(`/api/example/${faker.datatype.uuid()}`, {
// 			method: 'PUT',
// 			body: updatePayload,
// 		})

// 		expect(exampleAfterUpdate.description).toBe(updatePayload.description)
// 		expect(exampleAfterUpdate.details).toBe(updatePayload.details)
// 	})

// 	it('pUT throws errors for invalid data', async () => {
// 		// 1. Create the entity and assert that it has the correct shape & values
// 		const exampleToCreate: Prisma.ExampleCreateInput = {
// 			description: faker.lorem.paragraph(),
// 			details: faker.lorem.paragraphs(),
// 		}

// 		const exampleAfterUpsert = await $fetch('/api/example/1', {
// 			method: 'PUT',
// 			body: exampleToCreate,
// 		})

// 		expect(Object.keys(exampleAfterUpsert).sort()).toEqual(['id', 'description', 'details'].sort())
// 		expect(exampleAfterUpsert.details).toBe(exampleToCreate.details)
// 		expect(exampleAfterUpsert.description).toBe(exampleToCreate.description)
// 	})
// })
