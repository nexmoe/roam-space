<script setup lang="ts">
// Fetching data from the server side only
const { data: flows, error } = useFetch('/api/flow', {
	server: true,
})

// Only perform client-side operations within onMounted to avoid SSR issues
onMounted(() => {
	if (error.value)
		console.error('Error fetching data', error.value)
	// const toast = useToast()
	// toast.add({ title: 'Error fetching data' })
})

const config = await useGetConfig()

// Providing the 'flows' data to the component tree
provide('flows', flows)

useHead({
	htmlAttrs: {
		lang: 'zh-CN',
	},
})
</script>

<template>
	<div class="page">
		<PublicProse :title="`Hi, I'm ${config.title}`">
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
		<div class="container">
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
