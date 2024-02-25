import { useScheduler } from '#scheduler'
import { flowing } from '~/server/flowing'

export default defineNitroPlugin(() => {
    startScheduler()
})

function startScheduler() {
    const scheduler = useScheduler()

    // fetch every 1 hour
    scheduler.run(async () => {
        await flowing()
    }).everyHours(1)
}
