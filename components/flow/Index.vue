<script setup>
const props = defineProps({
	flow: Object,
})
</script>

<template>
	<FlowHeader :title="props.flow.title" :url="props.flow.homepage" />

	<div class="flow-body" :class="props.flow.class">
		<a v-for="(module) in props.flow.module" :key="module.url" :href="module.url" target="_blank">
			<ModuleList v-if="props.flow.card === 'list'" v-bind="{ module, section: props.flow }" />
			<ModuleImage v-else v-bind="{ module, section: props.flow }" />
		</a>
	</div>
</template>

<style>
.flow-body {
	@apply grid grid-cols-1 gap-7 mt-5 mb-16 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}
@media (min-width: 1280px) {
	.flow-body a:nth-child(n + 10) {
		display: none;
	}
}
@media (min-width: 1536px) {
	.flow-body a:nth-child(n + 9) {
		display: none;
	}
}
</style>
