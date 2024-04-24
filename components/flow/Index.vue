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

		<div
			class="flow-body" :class="[
				props.flow!.configCard === 'gallery' ? 'n-gallery' : 'n-grid',
			]"
		>
			<NuxtLink
				v-for="(module) in props.flow!.module" :key="module.url" :title="module.title" :to="module.url"
				target="_blank"
			>
				<ModuleList v-if="props.flow!.configCard === 'list'" v-bind="{ module }" />
				<ModuleProject v-else-if="props.flow!.configCard === 'project'" v-bind="{ module }" />
				<ModuleGallery v-else-if="props.flow!.configCard === 'gallery'" v-bind="{ module }" />
				<ModuleImage v-else v-bind="{ module }" />
			</NuxtLink>
		</div>
	</div>
</template>

<style>
.flow {
	@apply flex flex-col gap-6;
}

.flow-body.n-grid {
	@apply grid grid-cols-1 gap-4 mb-32 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}

.flow-body.n-gallery {
	@apply columns-1 gap-4 lg:columns-2 xl:columns-3 2xl:columns-4;
}

.flow-body .module {
	@apply mb-4;
}
</style>
