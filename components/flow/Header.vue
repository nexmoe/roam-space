<script setup lang="ts">
interface Props {
	url?: string
	title: string
	id: string
}
const props = defineProps<Props>()
</script>

<template>
	<div :id="props.title" class="flow-header pl-2.5 flex items-center justify-between">
		<div class="flex items-center space-x-3">
			<div class="text-xl -mt-1 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
				{{ props.title }}
			</div>
		</div>
		<NuxtLink
			:to="props.url ? props.url : `/flow/${props.id}`"
			:target="props.url?.startsWith('https://') ? '_blank' : ''"
		>
			<div class="py-2 px-5 flex items-center gap-1 flex-row bg-white rounded-full">
				更多
				<Icon name="i-heroicons-arrow-right-20-solid" />
			</div>
		</NuxtLink>
	</div>
</template>

<style>
.flow-header {
	padding-left: var(--n-spacing)
}
</style>
