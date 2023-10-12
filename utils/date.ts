import dayjs from 'dayjs'

export function formatDateTime(source: string | number) {
	return dayjs(source).format('YYYY/MM/DD HH:mm:ss')
}
