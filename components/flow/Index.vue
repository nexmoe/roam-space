<script setup>
const props = defineProps({
	section: Object,
})

const requestURL = computed(() => `/api/flow/${encodeURI(props.section.title)}`)
const { data, error } = await useFetch(requestURL, { immediate: true })
// TODO: handle error
if (error.value || data.value.code !== 0)
	console.error(`Error fetching data from ${url}:`, error.value, data.value)

const res = computed(() => data.value.data)
</script>

<template>
	<FlowHeader :title="section.title" :url="section.homepage" />

	<div class="flow-body" :class="section.class">
		<a v-for="module in res" :key="module.url" :href="module.url" target="_blank">
			<ModuleList v-if="section.card === 'list'" v-bind="{ module, section }" />
			<ModuleImage v-else v-bind="{ module, section }" />
		</a>
	</div>
</template>

<style>
.flow-body {
	@apply grid grid-cols-1 gap-7 mt-5 mb-16 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}
@media (min-width: 1280px) {
	.flow-body a:nth-child(n+10) {
		display: none;
	}
}
@media (min-width: 1536px) {
	.flow-body a:nth-child(n+9) {
        display: none;
    }
}
</style>
