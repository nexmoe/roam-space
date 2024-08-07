<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type ModuleOutput = RouterOutput['module']['get']
type Module = Exclude<ModuleOutput, null>

interface Props {
	module: Module
}

const props = defineProps<Props>()

const cover = props.module.s3Key ? `https://space.r2.102415.xyz/${props.module.s3Key}` : props.module.image
</script>

<template>
	<div class="module shu-card p-3 flex flex-col">
		<div class="flex flex-row items-center pt-1 pb-3 gap-2 px-2">
			<div class="w-5 h-5 block overflow-hidden">
				<LinkIcon
					:width="20"
					:url="props.module.url"
				/>
			</div>
			<div>
				{{ formatDateTime(module.date) }}
			</div>
		</div>
		<div
			v-if="props.module.image"
			class="shadow-sm border rounded-xl relative overflow-hidden"
			:style="{
				aspectRatio: `${module.imageWidth}/${module.imageHeight}`,
			}"
		>
			<NuxtImg
				class="w-full h-full"
				format="webp"
				placeholder
				:src="cover || undefined"
				:alt="module.title"
				referrerpolicy="no-referrer"
				loading="lazy"
				:width="module.imageWidth || undefined"
				:height="module.imageHeight || undefined"
				sizes="500px"
			/>
			<div class="absolute bottom-0 left-0 px-5 pt-5 pb-4 bg-gradient-to-t from-black/35 to-transparent w-full">
				<h3 class="drop-shadow-md text-white font-bold text-2xl tracking-tight">
					{{ props.module.title }}
				</h3>
			</div>
		</div>
	</div>
</template>
