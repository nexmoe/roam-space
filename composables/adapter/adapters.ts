import type { Modulex } from './types'

export function rsshub_json(data: any): Modulex[] {
	return data.items.map((item: any) => {
		return {
			title: item.title,
			url: item.url,
			image: libGetFirstImageSrc(item.content_html),
			content: item.content_html,
			date: item.date_published,
			platform: [item.url],
		}
	})
}

// https://nexmoe.com/content.json
export function hexo(data: any): Modulex[] {
	return data.posts.map((item: any) => {
		return {
			title: item.title,
			url: item.permalink,
			image: libGetFirstImageSrc(item.text),
			content: item.text,
			date: item.date,
		}
	})
}

// https://api.github.com/users/nexmoe/repos?sort=pushed&type=all
export function github_repos(data: any): Modulex[] {
	return data.map((item: any) => {
		return {
			title: item.name,
			url: item.html_url,
			image: libGetFirstImageSrc(item.html_url),
			content: item.description || item.name,
			date: item.pushed_at,
		}
	})
}
