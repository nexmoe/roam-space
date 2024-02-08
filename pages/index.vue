<script setup lang="ts">
const config = useConfig()
const { data: flows, error } = useFetch('/api/flow')

if (error.value) {
	console.error(`Error fetching data`, error.value)
	const toast = useToast()
	toast.add({ title: 'Error fetching data' })
}

provide('flows', flows)
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
	<div class="page">
		<div class="sidebar">
			<IndexCatalog />
		</div>
		<div class="content">
			<UContainer class="px-6 lg:px-12 pb-24 pt-16">
				<IndexHero />
				<template v-for="flow in flows" :key="flow.id">
					<Flow v-if="flow.module.length > 0" v-bind="{ flow }" />
				</template>
			</UContainer>
			<IndexFooter />
		</div>
	</div>
	<IndexTool />
</template>

<style>
body * {
	font-family: Noto Serif SC;
}
</style>

<style scoped>
.page {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
.sidebar {
	@apply fixed w-0 lg:w-64 bg-white h-full;
}
.content {
	@apply lg:pl-72 lg:pr-8;
}
</style>

<style>
.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-sm border;
}
</style>
