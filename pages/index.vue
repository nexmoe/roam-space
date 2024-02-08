<script setup lang="ts">
const config = useConfig()
const { data: flows, error } = useFetch('/api/flow')
// TODO: handle error
if (error.value)
	console.error(`Error fetching data`, error.value)

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
	<div class="bg-[#fefefe]">
		<div class="">
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
	</div>
	<IndexTool />
</template>

<style>
body * {
	font-family: Noto Serif SC;
}
</style>

<style scoped>
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
