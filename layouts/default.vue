<script setup lang="ts">
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
	</Head>
	<PublicHeader /> {{ isScrolling }}
	<div class="nexmoe-bg" />
	<slot />
	<PublicTool />
	<PublicFooter />
</template>

<style>
:root {
	--color-primary: #ff4e6a;
}

body * {
	font-family: Noto Serif SC;
}

.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-2xl bg-white text-sm leading-6;
}

.card {
	@apply rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10 duration-200;
}

.nexmoe-bg {
	background-image: url(https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1559251606-c623743a6d76?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fHBpbmt8ZW58MHx8fHwxNjYzMDQ0Nzc2&ixlib=rb-1.2.1&w=1920);
	opacity: 0.2;
	background-size: cover;
	/* filter: blur(30px); */
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
}

.nexmoe-shadow {
	box-shadow: 0 0.125rem 0.5rem rgb(204 177 161 / 30%);
}
</style>
