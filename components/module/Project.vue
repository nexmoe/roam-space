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
	<div class="module shu-card py-8">
		<div class="px-10">
			<div class="mt-1 mb-5 h-12 w-12 rounded-lg">
				<NuxtImg
					width="48px"
					height="48px"
					:src="cover || undefined"
					loading="lazy"
					:alt="props.module.title"
				/>
			</div>
			<h3
				class="text-xl font-bold tracking-tight text-black"
				v-html="props.module.title"
			/>
			<div
				class="mt-3 text-base leading-7 text-gray-500"
				v-html="props.module.content"
			/>
		</div>
	</div>
</template>
