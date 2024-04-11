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
const text = computed(() => extractTextFromHTML(props.module.content))
</script>

<template>
	<div class="module shu-card p-4 space-y-3 flex flex-col justify-between">
		<div class="space-y-3 ">
			<div class="p-1">
				{{ formatDateTime(module.date) }}
			</div>
			<div v-if="props.module.image" class="max-h-96 rounded-xl relative overflow-hidden">
				<NuxtImg
					class="w-full" format="webp" :src="props.module!.image" :alt="module.title"
					referrerpolicy="no-referrer" loading="lazy" width="320px" height="200px"
				/>
			</div>
		</div>
		<div class="space-y-3 p-1">
			<h3 v-if="!flow.configNoTitle" class="font-bold text-2xl tracking-tight text-black">
				{{ props.module.title }}
			</h3>
			<div v-if="!flow.configNoContent && text !== ' '" class="line-clamp-3">
				<div v-html="text" />
			</div>
			<div
				v-if="!props.module.image || (props.module.platform?.length || 0) > 1"
				class="flex flex-row items-center gap-1"
			>
				<template v-if="(props.module.platform?.length || 0) > 1">
					<div
						v-for="platform in props.module.platform" :key="platform" class="w-7 h-7 block"
						@click="navigateTo(platform, { open: { target: '_blank' }, external: true })"
					>
						<LinkIcon :url="platform" />
					</div>
				</template>
			</div>
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
