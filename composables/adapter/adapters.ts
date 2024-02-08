import type { NModule } from './types'

/**
 * Get the src attribute of the first <img> tag in the provided HTML.
 *
 * @param {string} html - The HTML content to search for the first <img> tag.
 * @return {string} The src attribute of the first <img> tag, or an empty string if no <img> tag is found.
 */
function libGetFirstImageSrc(html) {
	if (!html)
		return
	// 匹配第一个 <img> 标签的 src 属性内容
	const regex = /<img[^>]+src="([^">]+)"/
	const match = html.match(regex)

	// 如果匹配成功，则返回第一个匹配结果的 src 属性内容
	if (match && match.length > 1)
		return match[1].replace('http://', 'https://')

	// 如果没有匹配结果，则返回空字符串
}

export function rsshub_json(data: any): NModule[] {
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
export function hexo(data: any): NModule[] {
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
export function github_repos(data: any): NModule[] {
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

export function roam_space(data: any): NModule[] {
	return data as NModule[]
}
