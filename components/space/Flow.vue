<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type SpaceOutput = RouterOutput['space']['get']
type Space = Exclude<SpaceOutput, null>

interface Props {
	space: Space
	header?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	header: true,
})
</script>

<template>
	<div class="flow">
		<FlowHeader
			v-if="props.header"
			:id="props.space.id"
			:title="props.space.title"
		/>

		<div class="flow-body n-grid">
			<NuxtLink
				v-for="flow in props.space.flows"
				:key="flow.id"
				:title="flow.title"
				target="_blank"
			>
				<LazySpaceModule v-bind="{ flow }" />
			</NuxtLink>
		</div>
	</div>
</template>
