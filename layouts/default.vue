<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})
const config = await useGetConfig()
</script>

<template>
	<div>
		<PublicHeader />
		<slot />
		<LazyPublicTool />
		<LazyPublicFooter
			v-once
			:site-name="config.siteName"
			:sitemap="config.footerLinks"
		/>
	</div>
</template>

<style>
:root {
	--n-color-primary: #ff4e6a;
	--n-spacing: 0.25rem;
}

body {
	/* background-color: #f7f5fd; */
}

.shu-card {
	@apply relative hover:z-10 hover:shadow-2xl transition-all h-full overflow-hidden rounded-2xl bg-white text-sm leading-6;
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

.flow {
	@apply flex flex-col gap-6;
}

.flow-body.n-grid {
	@apply grid grid-cols-1 gap-4 mb-32 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}

.flow-body.n-gallery {
	@apply columns-1 gap-4 lg:columns-2 xl:columns-3 2xl:columns-4;
}

.flow-body.n-gallery .module {
	@apply mb-4;
}
</style>
