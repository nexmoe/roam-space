<script setup lang="ts">
// Fetching data from the server side only
const { data: flows, error } = useFetch('/api/flow', {
	server: true,
})

// Only perform client-side operations within onMounted to avoid SSR issues
onMounted(() => {
	if (error.value) {
		console.error('Error fetching data', error.value)
		const toast = useToast()
		toast.add({ title: 'Error fetching data' })
	}
})

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
		<PublicTab />
		<CustomPoe />
		<UContainer class="px-6 lg:px-12">
			<CustomHero />
		</UContainer>
		<UContainer class="px-6 lg:px-12">
			<template v-for="flow in flows" :key="flow.id">
				<Flow v-if="flow.module.length > 0" v-bind="{ flow }" />
			</template>
		</UContainer>
	</div>
</template>

<style scoped>
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
</style>
