import type { H3Event } from 'h3'
import flowJson from '~/config/flow.json'

export default eventHandler(async (event: H3Event) => {
	const prisma = event.context.prisma
	for (const flow of flowJson) {
		await prisma.flow.create({
			data: {
				...flow,
				api: {
					create: flow.api,
				},
			},
			include: {
				api: true,
			},
		})
	}
	return 'yes'
})
