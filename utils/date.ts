import dayjs from 'dayjs'

export function formatDateTime(source: string | number) {
	return dayjs(source).format('YYYY 年 M 月 D 日')
}
