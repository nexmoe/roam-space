<script setup lang="ts">
interface Props {
	module: NModule
}
const props = defineProps<Props>()
</script>

<template>
	<div
		class="module shu-card py-8"
	>
		<div class="px-10">
			<div class="mt-1 mb-5 h-12 w-12 rounded-lg">
				<NuxtImg
					width="48px"
					height="48px"
					:src="props.module.image"
					loading="lazy"
					:title="props.module.title"
				/>
			</div>
			<div
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
