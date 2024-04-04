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
		<NuxtLink
			v-for="(module) in props.flow.module" :key="module.url"
			:to="module.url"
			target="_blank"
		>
			<ModuleList v-if="props.flow.configCard === 'list'" v-bind="{ module }" />
			<ModuleProject v-else-if="props.flow.configCard === 'project'" v-bind="{ module }" />
			<ModuleImage v-else v-bind="{ module }" />
		</NuxtLink>
	</div>
</template>

<style>
.flow-body {
	@apply grid grid-cols-1 gap-7 mt-5 mb-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>
