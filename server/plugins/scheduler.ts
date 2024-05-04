import { useScheduler } from '#scheduler'
import { flowing, allSize, allS3 } from '~/server/flowing'

export default defineNitroPlugin(() => {
	startScheduler()
})

function startScheduler() {
	const scheduler = useScheduler()

	// fetch every 3 hour
	scheduler.run(async () => {
		await flowing()
		await allSize()
		await allS3()
	}).everyHours(3)
}
