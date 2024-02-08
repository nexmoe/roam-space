<script setup lang="ts">
import type { Modulex } from '~/composables/filter/types'

interface Props {
	cover?: string
	section: any
	module: Modulex
}

const props = defineProps<Props>()
const section = props.section
const image = props.cover || getFirstImageSrc(props.module.content)
const text = extractTextFromHTML(props.module.content)
</script>

<template>
	<div
		class="module shu-card space-x-4 py-4 px-5"
	>
		<div class="max-w-full flex space-x-4 items-center">
			<NuxtImg
				height="40px"
				width="40px"
				class="h-10 w-10 rounded-full"
				:src="image"
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
