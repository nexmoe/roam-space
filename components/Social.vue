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
	res = await $fetch(`https://api.swo.moe/stats/${props.path}`).catch(
		error => error.data,
	)
}
// const { data, pending, error, refresh } = await useFetch(section.api);
</script>

<template>
	<a :href="url" target="_blank" :title="props.tip">
		<UTooltip :text="props.tip">
			<UButton :aria-label="props.tip" size="xs" class="mr-2" :color="color" :ui="{ rounded: 'rounded-full' }">{{
				props.tip }} {{ res.count }}</UButton>
		</UTooltip>
	</a>
</template>
