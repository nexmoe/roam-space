<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type FlowOutput = RouterOutput['flow']['get']
type Flow = Exclude<FlowOutput, null | undefined>

interface Props {
	flow: Flow
	header?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	header: true,
})

provide('flow', props.flow)
</script>

<template>
	<div class="flow">
		<FlowHeader
			v-if="props.header"
			:id="props.flow.id"
			:title="props.flow.title"
			:url="props.flow.homepage"
		/>

		<div
			class="flow-body"
			:class="[
				props.flow.configCard === 'gallery' ? 'n-gallery' : 'n-grid',
			]"
		>
			<NuxtLink
				v-for="(module) in props.flow.module"
				:key="module.url"
				:title="module.title"
				:to="module.url"
				target="_blank"
			>
				<LazyModuleList
					v-if="props.flow.configCard === 'list'"
					v-bind="{ module }"
				/>
				<LazyModuleProject
					v-else-if="props.flow.configCard === 'project'"
					v-bind="{ module }"
				/>
				<LazyModuleGallery
					v-else-if="props.flow.configCard === 'gallery'"
					v-bind="{ module }"
				/>
				<LazyModuleImage
					v-else
					v-bind="{ module }"
				/>
			</NuxtLink>
		</div>
	</div>
</template>
