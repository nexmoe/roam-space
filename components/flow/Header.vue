<script setup lang="ts">

const props = defineProps({
	url: String,
	title: String,
})
</script>

<template>
	<div :id="props.title" class="pl-2.5 mt-32 flex items-center justify-between">
		<div class="flex items-center space-x-3">
			<div class="text-xl -mt-1 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
				{{ props.title }}
			</div>
		</div>
		<a v-if="props.url" :href="props.url" target="_blank">
			<UButton color="white" variant="solid" :ui="{ rounded: 'rounded-full' }">
				更多
				<template #trailing>
					<Icon name="i-heroicons-arrow-right-20-solid" />
				</template>
			</UButton>
		</a>
	</div>
</template>
