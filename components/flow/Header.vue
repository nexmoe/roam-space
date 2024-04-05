<script setup lang="ts">

const props = defineProps({
	url: String,
	title: String,
})
</script>

<template>
	<div :id="props.title" class="pl-2.5 flex items-center justify-between">
		<div class="flex items-center space-x-3">
			<div class="text-xl -mt-1 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
				{{ props.title }}
			</div>
		</div>
		<a v-if="props.url" :href="props.url" target="_blank">
			<div class="py-2 px-5 flex items-center flex-row bg-white rounded-full">
				更多
				<Icon name="i-heroicons-arrow-right-20-solid" />
			</div>
		</a>
	</div>
</template>
