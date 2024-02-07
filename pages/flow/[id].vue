<script setup>
const id = useRoute().params.id

const { data: flow } = useFetch(`/api/flow/${id}`)
</script>

<template>
	<div class="flow-body">
		<a v-for="module in flow.module" :key="module.url" :href="module.url" target="_blank">
			<ModuleList v-if="flow.card === 'list'" v-bind="{ module, section: flow }" />
			<ModuleImage v-else v-bind="{ module, section: flow }" />
		</a>
	</div>
</template>
