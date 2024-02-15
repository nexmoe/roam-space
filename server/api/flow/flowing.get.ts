import type { H3Event } from 'h3'
import { flowing } from '~/server/flowing'

export default eventHandler(async () => {
    await flowing()
    return 'yes'
})
