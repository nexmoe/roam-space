<script setup lang="ts">
interface Props {
	section: any
	module: Module
}

const props = defineProps<Props>()

const image = computed(() => getFirstImageSrc(props.module.content))
const text = computed(() => extractTextFromHTML(props.module.content))
</script>

<template>
	<div
		class="module shu-card"
	>
		<div v-if="!section.noTitle" class="mx-7 mt-5 mb-3 font-bold tracking-tight text-black">
			{{ props.module.title }}
		</div>
		<div v-if="props.module.platform && props.module.platform.length > 1" class="mx-7 mb-5 flex flex-row">
			<div
				v-for="platform in props.module.platform" :key="platform" class="w-5 h-5 mr-1 block"
				@click="navigateTo(platform, { open: { target: '_blank' }, external: true })"
			>
				<img
					class="rounded-md outline-2 hover:outline" :src="`https://lib.xiaoshuapp.com/icon/x?url=${platform}`"
					:alt="module.title" referrerpolicy="no-referrer" loading="lazy"
				>
			</div>
		</div>
		<div v-if="image && !section.noImage" class="max-h-48 relative overflow-hidden">
			<NuxtImg
				class="w-full" format="webp" :src="image" :alt="module.title" referrerpolicy="no-referrer" loading="lazy"
				width="320px" height="200px"
			/>
			<div class="absolute pb-5 px-7 w-full bottom-0 left-0">
				<UBadge color="white" variant="solid">
					{{ formatDateTime(module.date) }}
				</UBadge>
			</div>
		</div>
		<div v-if="!section.noContent && text !== ' '" class="mx-7 my-5 max-h-16">
			<div v-html="text" />
		</div>
		<div class="absolute bg-gradient-to-t from-white pt-7 pb-5 px-7 w-full bottom-0 left-0">
			<UBadge v-if="!image" color="gray" variant="solid">
				{{ formatDateTime(module.date) }}
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
