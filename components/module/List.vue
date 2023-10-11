<script setup>
const props = defineProps({
	cover: String,
	section: Object,
	item: Object,
});
const section = props.section;
const item = props.item;
const image = props.cover || getFirstImageSrc(item.content);
const text = extractTextFromHTML(item.content);
</script>

<template>
	<div
		class="module hover:scale-105 hover:shadow-2xl transition-all flex justify-between space-x-4 items-center py-4 px-5 overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5"
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
				class="text-base font-bold tracking-tight text-black truncate"
				v-if="!section.noTitle"
			>
				{{ item.title }}
			</div>
		</div>

		<div v-if="!section.noContent" class="truncate">
			<div v-html="text"></div>
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
