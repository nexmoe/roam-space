<script setup lang="ts">
import type { Modulex } from '~/composables/adapter/types'

interface Props {
	section: any
	module: Modulex
}

const props = defineProps<Props>()
const section = props.section
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
				alt="Cover"
			/>

			<div
				v-if="!section.noTitle"
				class="text-base font-bold tracking-tight text-black truncate"
			>
				{{ props.module.title }}
			</div>
		</div>

		<div v-if="!section.noContent" class="truncate">
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