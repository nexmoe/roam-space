import { flowing } from '~/server/flowing'

export default eventHandler(async () => {
	await flowing()
	return 'yes'
})
