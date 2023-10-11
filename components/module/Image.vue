<script setup>
const props = defineProps({
	section: Object,
	item: Object,
});
const image = computed(() => getFirstImageSrc(props.item.content));
const text = computed(() => extractTextFromHTML(props.item.content));
</script>

<template>
	<div
		class="module relative hover:scale-105 hover:shadow-2xl transition-all h-full overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5"
	>
		<div
			class="mx-7 mt-5 mb-3 text-base font-bold tracking-tight text-black"
			v-if="!section.noTitle"
		>
			{{ item.title }}
		</div>
		<div v-if="item.platform.length > 1" class="mx-7 mb-5 flex flex-row">
			<!-- <a
				class="w-5 h-5 mr-1 block"
				v-for="platform in item.platform"
				:href="platform"
				target="_blank"
			>
				<img
					class="rounded-md outline-2 hover:outline"
					:src="`https://lib.xiaoshuapp.com/icon/x?url=${platform}`"
					:alt="item.title"
					referrerpolicy="no-referrer"
					loading="lazy"
				/>
			</a> -->
			<div
				v-for="platform in item.platform" 
				class="w-5 h-5 mr-1 block" 
				@click="navigateTo(platform, { open: true, external: true })"
			>
			<img
				class="rounded-md outline-2 hover:outline"
				:src="`https://lib.xiaoshuapp.com/icon/x?url=${platform}`"
				:alt="item.title"
				referrerpolicy="no-referrer"
				loading="lazy"
			/>
			</div>
			
		</div>
		<div
			v-if="image && !section.noImage"
			class="max-h-48 relative overflow-hidden"
		>
			<NuxtImg
				class="w-full"
				format="webp"
				:src="image"
				:alt="item.title"
				referrerpolicy="no-referrer"
				loading="lazy"
				width="320px"
				height="200px"
			/>
			<div class="absolute pb-5 px-7 w-full bottom-0 left-0">
				<UBadge color="white" variant="solid">
					{{ formatDateTime(item.date) }}
				</UBadge>
			</div>
		</div>
		<div
			v-if="!section.noContent && text !== ' '"
			class="mx-7 my-5 max-h-16"
		>
			<div v-html="text"></div>
		</div>
		<div
			class="absolute bg-gradient-to-t from-white pt-7 pb-5 px-7 w-full bottom-0 left-0"
		>
			<UBadge v-if="!image" color="gray" variant="solid">
				{{ formatDateTime(item.date) }}
			</UBadge>
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
