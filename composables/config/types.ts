// Hero
export interface Hero {
	title: string
	avatar: string
	avatarTip?: string
	tags?: string[]
	description?: string
	menus?: Menu[]
	socials?: Social[]
}
export interface Menu {
	title: string
	url: string
}
export interface Social {
	name: string
	url: string
	path?: string
	icon: string
	color?: string | 'primary'
}

// List
export interface List {
	id: string
	title: string
	url?: string
	content?: string
	date?: string
}

export interface Project {
	title: string
	logo: string
	color: string
	des: string
	slogan: string
	url: string
}


export interface Rsshub {
	origin: string[]
}

export interface Configuration {
	rsshub: Rsshub
}

export interface Config {
	hero: Hero
	config: Configuration
}