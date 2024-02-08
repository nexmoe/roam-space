<script setup>
const id = useRoute().params.id

const { data: flow, error } = useFetch(`/api/flow/${id}`)

if (error.value) {
	console.error(`Error fetching data`, error.value)
	const toast = useToast()
	toast.add({ title: 'Error fetching data' })
}
</script>

<template>
	<div class="flow-body">
		<a v-for="(module, index) in flow.module" :key="module.url + index" :href="module.url" target="_blank">
			<ModuleList v-if="flow.card === 'list'" v-bind="{ module, section: flow }" />
			<ModuleImage v-else v-bind="{ module, section: flow }" />
		</a>
	</div>
</template>
