<script setup>
const props = defineProps({
	url: String,
	path: String,
	icon: String,
	color: String,
	tip: String,
})
let res = {}
if (props.path) {
	const { data } = await useFetch(`https://api.swo.moe/stats/${props.path}`)
	res = data
}
</script>

<template>
	<a :href="url" target="_blank" :title="props.tip">
		<div
			class="module shu-card space-x-4 py-4 px-5"
		>
			<UTooltip :text="props.tip">
				<UButton :aria-label="props.tip" size="xs" class="mr-2" :color="color" variant="outline" :ui="{ rounded: 'rounded-full' }">{{
					props.tip }} {{ res.count ? `${res.count} 粉` : "" }}</UButton>
			</UTooltip>
		</div>
	</a>
</template>
