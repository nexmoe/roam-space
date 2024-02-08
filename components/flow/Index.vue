<script setup lang="ts">
import type { Flow } from '@prisma/client'

interface Props {
	flow: Flow
}

const props = defineProps<Props>()

provide('flow', props.flow)
</script>

<template>
	<FlowHeader :title="props.flow.title" :url="props.flow.homepage" />

	<div class="flow-body">
		<a v-for="(module) in props.flow.module" :key="module.url" :href="module.url" target="_blank">
			<ModuleList v-if="props.flow.card === 'list'" v-bind="{ module }" />
			<ModuleProject v-else-if="props.flow.card === 'project'" v-bind="{ module }" />
			<ModuleImage v-else v-bind="{ module }" />
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
