<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type ModuleOutput = RouterOutput['module']['get']
type FlowOutput = RouterOutput['flow']['get']
type Module = Exclude<ModuleOutput, null>

interface Props {
	module: Module
}

const props = defineProps<Props>()
const flow = inject('flow') as FlowOutput
const text = computed(() => extractTextFromHTML(props.module.content))
const cover = props.module.s3Key ? `https://space.r2.102415.xyz/${props.module.s3Key}` : props.module.image
</script>

<template>
	<div class="module shu-card p-7 gap-3 flex flex-col justify-between">
		<div class="flex flex-row items-center gap-2">
			<div class="text-neutral-600">
				{{ formatDateTime(module.date) }}
			</div>
			<div class="w-5 h-5 block overflow-hidden">
				<LinkIcon
					:width="20"
					:url="props.module.url"
				/>
			</div>
		</div>
		<div class="space-y-6">
			<div class="space-y-4">
				<h3
					v-if="!flow?.configNoTitle"
					class="card-title font-bold text-2xl tracking-tight text-neutral-950"
				>
					{{ props.module.title }}
				</h3>
				<div
					v-if="!flow?.configNoContent && text !== ' '"
					class="text-base line-clamp-4"
					v-html="text"
				/>
				<div
					v-if="!props.module.image || (props.module.platform?.length || 0) > 1"
					class="flex flex-row items-center gap-1"
				>
					<template v-if="(props.module.platform?.length || 0) > 1">
						<div
							v-for="platform in props.module.platform"
							:key="platform"
							class="w-7 h-7 block"
							@click="navigateTo(platform, { open: { target: '_blank' }, external: true })"
						>
							<LinkIcon
								:width="28"
								:url="platform"
							/>
						</div>
					</template>
				</div>
			</div>
			<div
				v-if="props.module.image"
				class="shadow-sm max-h-96 rounded-xl relative overflow-hidden"
			>
				<NuxtImg
					class="w-full"
					format="webp"
					:src="cover || undefined"
					:alt="module.title"
					referrerpolicy="no-referrer"
					loading="lazy"
					:width="module.imageWidth || undefined"
					:height="module.imageHeight || undefined"
					sizes="500px"
				/>
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
