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
			:space="true"
		/>

		<div class="flow-body n-grid">
			<div
				v-for="flow in props.space.flows"
				:key="flow.id"
			>
				<LazySpaceModule v-bind="{ flow }" />
			</div>
		</div>
	</div>
</template>
