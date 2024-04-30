<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type ModuleOutput = RouterOutput['module']['get']
type FlowOutput = RouterOutput['flow']['get']

interface Props {
	module: ModuleOutput
}

const props = defineProps<Props>()
const flow = inject('flow') as FlowOutput
const text = extractTextFromHTML(props.module.content)
</script>

<template>
	<div
		class="module shu-card space-x-4 py-4 px-5"
	>
		<div class="max-w-full flex space-x-4 items-center">
			<NuxtImg
				v-if="props.module.image"
				height="40px"
				width="40px"
				class="h-10 w-10 rounded-full"
				:src="props.module.image"
				loading="lazy"
				:alt="props.module.title"
			/>

			<h3
				v-if="!flow.configNoTitle"
				class="text-base font-bold tracking-tight text-black truncate"
			>
				{{ props.module.title }}
			</h3>
		</div>

		<div
			v-if="!flow.configNoContent"
			class="truncate"
		>
			<div v-html="text" />
		</div>
	</div>
</template>

<style scoped>
.card :deep(img) {
	margin: -24px;
	margin-bottom: 28px;
	max-width: calc(100% + 48px);
	width: calc(100% + 48px);
}
.card :deep(iframe) {
	max-width: 100%;
}
</style>
~/composables/adapters/types
