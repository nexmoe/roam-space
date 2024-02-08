import type { H3Event } from 'h3'
import Flowing from '~/server/flowing'

export default eventHandler(async () => {
    await Flowing()
    return 'yes'
})
