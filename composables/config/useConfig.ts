import type { Config, Flow, Hero } from "./types";

const hero: Hero = {
	title: "Nexmoe",
	description: "一个开发者。关于勇敢与热爱，互联网/创造/赛博朋克",
	avatar: "https://i.dawnlab.me/84781b0f979ee4183c0ca0ab0fab1682.png/nexmoe",
	avatarTip: "用 Stable Diffusion 画的，很喜欢红色",
	tags: [
		"🔆热爱",
		"🔥内心炽热",
		"🙂理性",
		"充满好奇心",
		"喜欢良好的UI/UX",
		"兴趣使然",
		"喜欢创造",
		"坦诚",
		"豁达",
	],
	socials: [
		{
			name: "博客",
			url: "https://nexmoe.com",
			icon: "i-mdi-home",
		},
		{
			name: "Github",
			url: "https://github.com/nexmoe",
			path: "github/nexmoe",
			icon: "i-mdi-github",
			color: "black",
		},
		{
			name: "哔哩哔哩",
			url: "https://space.bilibili.com/20238211",
			path: "bilibili/20238211",
			icon: "i-ri-bilibili-fill",
			color: "pink",
		},
		{
			name: "即刻",
			url: "https://okjk.co/ZeWNUv",
			path: "jike/7a751a1a-d2d1-492d-88fb-ed153c49105b",
			icon: "i-mdi-alpha-j",
			color: "yellow",
		},
		{
			name: "Twitter",
			url: "https://twitter.com/nexmoe",
			icon: "i-mdi-twitter",
			color: "blue",
		},
	],
};

const flow: Flow[] = [
	{
		adapter: "project",
		title: "项目",
		list: [
			{
				title: "小舒同学",
				logo: "https://xiaoshuapp.com/icon.svg",
				color: "#df5d64",
				des: "轻松得使你的收藏夹变成强大的新标签页，让你重新聚焦真正重要的事情",
				slogan: "我们费尽心思折腾主页，<br />却从未好好整理过我们的收藏夹",
				url: "https://xiaoshuapp.com/",
			},
			{
				title: "探索者小舒",
				logo: "https://xiaoshuapp.com/explorer/icon.svg",
				color: "#665cd5",
				des: "以最轻松快捷的方式在侧栏切换搜索",
				slogan: "专业的操作不需要那么痛苦",
				url: "https://xiaoshuapp.com/explorer/",
			},
			{
				title: "漫游云野",
				logo: "https://i.dawnlab.me/50929d62d1850bcc95495ff522ee127c.th.png/nexmoe",
				color: "#f04e45",
				des: "轻松随意地与你朋友分享你的宝藏，发现互联网上的秘宝",
				slogan: "让你的收藏不再是孤岛",
				url: "https://roam.mixcm.com",
			},
			{
				title: "Monitor Pro",
				logo: "https://i.dawnlab.me/e15216d7aff69340c2568ef04ebf504e.png",
				color: "#ff5454",
				des: "监控一切你在意的资源信息",
				slogan: "专业的操作不需要那么痛苦",
				url: "https://marketplace.visualstudio.com/items?itemName=nexmoe.monitor-pro",
			},
		],
	},
	{
		homepage: "https://nex.xlog.app",
		api: [
			{
				adapter: "rsshubJson",
				url: "https://lib.xiaoshuapp.com/rss/juejin/column/7287429638019121208.json?limit=4",
			},
			{
				adapter: "rsshubJson",
				url: "https://lib.xiaoshuapp.com/rss/zhihu/posts/people/nexmoe.json?&limit=4"
			},
			{
				adapter: "rsshubJson",
				url: "https://nex.xlog.app/feed?format=json",
			},
		],
		title: "文章",
	},
	{
		homepage: "https://juejin.cn/column/7287241187447308345",
		api: [
			{
				url: "https://lib.xiaoshuapp.com/rss/juejin/column/7287241187447308345.json?limit=4",
				adapter: "rsshubJson",
			},
		],
		title: "笔记",
	},
	{
		homepage:
			"https://m.okjike.com/users/7a751a1a-d2d1-492d-88fb-ed153c49105b",
		api: [
			{
				adapter: "rsshubJson",
				url: "https://lib.xiaoshuapp.com/rss/jike/user/7a751a1a-d2d1-492d-88fb-ed153c49105b.json?limit=4",
			},
		],
		title: "即刻",
		noTitle: true,
	},
	{
		homepage: "https://music.163.com/#/user/home?id=129387613",
		api: [
			{
				adapter: "rsshubJson",
				url: "https://lib.xiaoshuapp.com/rss/163/music/user/playrecords/129387613/0.json?limit=8",
			},
		],
		title: "听歌总榜",
		card: "list",
		noContent: true,
	},
];

export default function (): Config {
	return {
		hero,
		flow,
	};
}
