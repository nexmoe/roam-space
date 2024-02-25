import type { API } from '@prisma/client'
import type { NModule } from './types'

/**
 * Get the src attribute of the first <img> tag in the provided HTML.
 *
 * @param {string} html - The HTML content to search for the first <img> tag.
 * @return {string | undefined} The src attribute of the first <img> tag, or undefined if no <img> tag is found.
 */
function libGetFirstImageSrc(html: string): string | undefined {
	const regex = /<img[^>]+src="([^">]+)"/
	const match = html.match(regex)

	return match ? match[1].replace(/^http:\/\//i, 'https://') : undefined
}

interface RSSHubItem {
	title: string
	url: string
	content_html: string
	date_published: string
}

export async function rsshub_json(api: API): Promise<NModule[]> {
	const { items } = await $fetch<{ items: RSSHubItem[] }>(api.url)

	return items.map(({ title, url, content_html, date_published }: RSSHubItem) => ({
		title,
		url,
		image: libGetFirstImageSrc(content_html),
		content: content_html,
		date: date_published ? new Date(date_published) : new Date(),
		platform: [url],
	}))
}

interface HexoPost {
	title: string
	permalink: string
	text: string
	date: Date
}

export async function hexo(api: API): Promise<NModule[]> {
	const { posts } = await $fetch<{ posts: HexoPost[] }>(api.url)

	return posts.map(({ title, permalink, text, date }: HexoPost) => ({
		title,
		url: permalink,
		image: libGetFirstImageSrc(text),
		content: text,
		date: new Date(date),
	}))
}

interface GitHubRepo {
	name: string
	html_url: string
	description?: string
	pushed_at: string
}

export async function github_repos(api: API): Promise<NModule[]> {
	const repos = await $fetch<GitHubRepo[]>(api.url)

	return repos.map(({ name, html_url, description, pushed_at }: GitHubRepo) => ({
		title: name,
		url: html_url,
		image: '', // GitHub repos do not have an HTML content field to extract images from
		content: description || name,
		date: new Date(pushed_at),
	}))
}

export async function roam_space(api: API): Promise<NModule[]> {
	return $fetch<NModule[]>(api.url)
}
