<script setup>
const id = useRoute().params.id

const { data: flow, error } = useFetch(`/api/flow/${id}`)

if (error.value) {
	console.error(`Error fetching data`, error.value)
	const toast = useToast()
	toast.add({ title: 'Error fetching data' })
}
provide('flow', flow)
</script>

<template>
	<div class="flow-body">
		<a v-for="(module, index) in flow.module" :key="module.url + index" :href="module.url" target="_blank">
			<ModuleList v-if="flow.configCard === 'list'" v-bind="{ module }" />
			<ModuleImage v-else v-bind="{ module }" />
		</a>
	</div>
</template>
