import { useScheduler } from '#scheduler'
import { flowing, allSize } from '~/server/flowing'

export default defineNitroPlugin(() => {
	startScheduler()
})

function startScheduler() {
	const scheduler = useScheduler()

	// fetch every 3 hour
	scheduler.run(async () => {
		await flowing()
	}).everyHours(3)

	scheduler.run(async () => {
		await allSize()
	}).everyDays(14)
}
