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
			class="fixed w-screen h-screen bg-cover bg-fixed bg-no-repeat bg-[url(https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1688636596185-798367e2cb6b?fmt=webp&w=2560)]"
			style="z-index: -1"
		/>
		<UContainer class="pb-24 pt-16">
			<IndexHero />
			<section v-for="item in config.flow" :key="item">
				<FlowProject v-if="item.adapter === 'project'" :title="item.title" :list="item.list" :section="item" />
				<Flow v-else :section="item" />
			</section>
		</UContainer>
	</div>
	<IndexTool />
</template>
