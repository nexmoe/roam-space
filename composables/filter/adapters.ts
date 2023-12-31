import type { Module } from './types'

export function rsshubJson(data: any): Module[] {
	return data.items.map((item: any) => {
		return {
			title: item.title,
			url: item.url,
			content: item.content_html,
			date: item.date_published,
			platform: [item.url],
		}
	})
}

// https://nexmoe.com/content.json
export function hexo(data: any): Module[] {
	return data.posts.map((item: any) => {
		return {
			title: item.title,
			url: item.permalink,
			content: item.text,
			date: item.date,
		}
	})
}
