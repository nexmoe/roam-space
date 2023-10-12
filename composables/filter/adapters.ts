import type { Item } from './types'

export function rsshubJson(data: any): Item[] {
	return data.items.map((item: any) => {
		return {
			id: item.id,
			title: item.title,
			url: item.url,
			content: item.content_html,
			date: item.date_published,
			platform: [item.url],
		}
	})
}

// https://nexmoe.com/content.json
export function hexo(data: any): Item[] {
	return data.posts.map((item: any) => {
		return {
			id: item.permalink,
			title: item.title,
			url: item.permalink,
			content: item.text,
			date: item.date,
		}
	})
}
