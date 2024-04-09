<script setup lang="ts">
const config = await useGetConfig()

useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})
</script>

<template>
	<Head>
		<Title>{{ config.title }}</Title>
		<Meta name="description" :content="config.description" />
	</Head>
	<!-- <div class="nexmoe-bg" /> -->
	<PublicHeader />
	<slot />
	<PublicTool />
	<PublicFooter />
</template>

<style>
:root {
	--n-color-primary: #ff4e6a;
	--n-spacing: 0.25rem;
}

body {
	/* font-family: Noto Serif SC; */
	background-color: #f7f5fd;
}

.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-3xl bg-white text-sm leading-6;
}

.nexmoe-bg {
	/* background-image: url(https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1559251606-c623743a6d76?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fHBpbmt8ZW58MHx8fHwxNjYzMDQ0Nzc2&ixlib=rb-1.2.1&w=1920); */
	opacity: 0.2;
	background: linear-gradient(to bottom, #ff4e6a, white);
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
