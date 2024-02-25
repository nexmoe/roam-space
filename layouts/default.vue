<script setup>
const config = useConfig()

useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})
</script>

<template>
	<Head>
		<Title>{{ config.hero.title }}</Title>
		<Meta name="description" :content="config.hero.description" />
		<Link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap"
			media="all"
		/>
	</Head>
	<slot />
</template>

<style>
body {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' fill='rgb(195,195,195)'%3E%3Ccircle cx='16' cy='16' r='1'/%3E%3C/svg%3E");
}
body * {
	font-family: Noto Serif SC;
}
.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-sm border;
}
</style>
