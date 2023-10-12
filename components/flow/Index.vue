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

	<div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4" :class="section.class">
		<a v-for="item in res" :key="item.url" :href="item.url" target="_blank">
			<ModuleList v-if="section.card === 'list'" v-bind="{ item, section }" />
			<ModuleImage v-else v-bind="{ item, section }" />
		</a>
	</div>
</template>
