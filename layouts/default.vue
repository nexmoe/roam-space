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
body * {
	font-family: Noto Serif SC;
}
.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-sm border;
}
</style>
