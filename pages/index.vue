<script setup lang="ts">
const { $client } = useNuxtApp()

const space = await $client.space.get.query({ id: 'bfa294b0-face-4780-bf72-050b5d114bca' })
const dev = await $client.space.get.query({ id: '76a6249e-ae4e-4adf-9089-a2cd7e25e1ff' })

if (!space || !dev) {
	throw createError({
		statusCode: 404,
	})
}

const flows = space.flows
const catalog = flows.map(x => ({ title: x.title, anchor: x.title, active: false }))
catalog.push({
	title: dev.title,
	anchor: dev.title,
	active: false,
})

const config = await useGetConfig()
const globalStore = useGlobalStore()

onMounted(() => {
	globalStore.setCatalog(catalog)
})

provide('flows', flows)

useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})

defineOgImageComponent('NuxtSeo', {
	theme: config.ogTheme,
	title: config.siteName,
	description: config.description,
})
</script>

<template>
	<div class="page">
		<div class="container">
			<PublicProse :title="`Hi, I'm ${config.siteName}`">
				<div
					class="whitespace-pre-wrap"
					v-html="config.description"
				/>
				<div class="tags flex flex-row flex-wrap gap-2">
					<div
						v-for="item in config.tags"
						:key="item"
						class="text-black inline-block shu-card border-none text-sm px-3 py-0.5"
					>
						{{ item }}
					</div>
				</div>
			</PublicProse>
			<template
				v-for="flow in flows "
				:key="flow.id"
			>
				<LazyFlow
					v-if="flow.module.length > 0"
					v-bind="{ flow }"
				/>
			</template>
			<SpaceFlow v-bind="{ space: dev }" />
		</div>

		<CustomPoe />
	</div>
</template>

<style scoped>
.header {
	padding-right: var(--n-spacing)
}

@media (min-width: 1280px) {
	.page :deep(.flow-body a:nth-child(n + 10)) {
		display: none;
	}
}

@media (min-width: 1536px) {
	.page :deep(.flow-body a:nth-child(n + 9)) {
		display: none;
	}
}

.tags {
	margin-left: calc(0 - var(--n-spacing));
}
</style>
