import { useScheduler } from '#scheduler'
import { flowing, allSize, allS3 } from '~/server/flowing'

export default defineNitroPlugin(() => {
	startScheduler()
})

function startScheduler() {
	const config = useRuntimeConfig()

	const scheduler = useScheduler()

	// fetch every 3 hour
	scheduler.run(async () => {
		await flowing()
		await allSize()
		if (config.s3.accessKeyId) {
			await allS3()
		}
	}).everyHours(3)
}
