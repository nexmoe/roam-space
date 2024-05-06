<script setup lang="ts">
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '@/server/trpc/routers'

type RouterOutput = inferRouterOutputs<AppRouter>
type FlowOutput = RouterOutput['flow']['get']
type Flow = Exclude<FlowOutput, null | undefined>

interface Props {
	flow: Flow
}

const props = defineProps<Props>()
</script>

<template>
	<div class="module shu-card p-4">
		<div class="px-3 py-2 text-base">
			{{ flow.title }}
		</div>
		<div class="list-none m-0 p-0">
			<NuxtLink
				v-for="module in props.flow.module"
				:key="module.id"
				:title="module.title"
				:href="module.url"
				target="_blank"
				class="flex flex-row items-center gap-2 hover:bg-gray-100 focus:bg-gray-200 rounded-2xl px-3 py-2 transition duration-300"
			>
				<LinkIcon
					class="w-5 h-5 basis-5"
					:width="20"
					:url="module.url"
				/>
				<div class="truncate ">
					{{ module.title }}
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
