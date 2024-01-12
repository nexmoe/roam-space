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
	</Head>
	<div>
		<div
			class="fixed w-screen h-screen bg-cover bg-fixed bg-no-repeat bg-[url(https://lib.xiaoshuapp.com/wall/bing)]"
			style="z-index: -1;"
		/>
		<div class="">
			<div class="sidebar">
				<IndexCatalog />
			</div>
			<div class="content">
				<UContainer class="px-6 md:px-12 pb-24 pt-16">
					<IndexHero />
					<section v-for="item in config.flow" :key="item">
						<FlowProject v-if="item.adapter === 'project'" :title="item.title" :list="item.list" :section="item" />
						<Flow v-else :section="item" />
					</section>
				</UContainer>
			</div>
		</div>
	</div>
	<IndexTool />
	<IndexFooter />
</template>

<style scoped>
.sidebar {
	@apply fixed w-0 md:w-64 bg-white h-full;
}
.content {
	@apply md:pl-72 md:pr-8;
}
</style>

<style>
.shu-card {
	@apply relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5;
}
</style>
