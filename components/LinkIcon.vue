<script setup lang="ts">
interface Props {
	url: string
	width?: number
}
const props = defineProps<Props>()

function getOrigin(url: string) {
	const urlx = new URL(url)
	return urlx.host.toString()
}
</script>

<template>
	<NuxtImg
		class="rounded-md outline-2 hover:outline cursor-pointer"
		:src="`https://unavatar.io/${getOrigin(props.url)}`"
		:alt="props.url"
		referrerpolicy="no-referrer"
		loading="lazy"
		:width="props.width"
		:height="props.width"
	/>
</template>
