<script setup lang="ts">
const { $client } = useNuxtApp()
const flows = await $client.flow.list.query()

const config = await useGetConfig()

provide('flows', flows)

useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})
</script>

<template>
	<div class="page">
		<div class="container">
			<PublicProse :title="`Hi, I'm ${config.siteName}`">
				<div class="whitespace-pre-wrap" v-html="config.description" />
				<div class="tags flex flex-row flex-wrap gap-2">
					<div
						v-for="item in config.tags" :key="item"
						class="text-black inline-block shu-card border-none text-sm px-3 py-0.5"
					>
						{{ item }}
					</div>
				</div>
			</PublicProse>
			<template v-for=" flow in flows " :key="flow.id">
				<Flow v-if="flow.module.length > 0" v-bind="{ flow }" />
			</template>
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
