<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type FlowOutput = RouterOutput['flow']['get']

interface Props {
	flow: FlowOutput
	header?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	header: true,
})

provide('flow', props.flow)
</script>

<template>
	<div class="flow">
		<FlowHeader v-if="props.header" :id="props.flow!.id" :title="props.flow!.title" :url="props.flow!.homepage" />

		<div class="flow-body">
			<NuxtLink v-for="(module) in props.flow!.module" :key="module.url" :to="module.url" target="_blank">
				<ModuleList v-if="props.flow!.configCard === 'list'" v-bind="{ module }" />
				<ModuleProject v-else-if="props.flow!.configCard === 'project'" v-bind="{ module }" />
				<ModuleImage v-else v-bind="{ module }" />
			</NuxtLink>
		</div>
	</div>
</template>

<style>
.flow {
	@apply flex flex-col gap-6;
}

.flow-body {
	@apply grid grid-cols-1 gap-4 mb-32 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}
</style>
