<script setup lang="ts">
interface Props {
	url: string
}
const props = defineProps<Props>()

function getOrigin(url: string) {
	const urlx = new URL(url)
	return urlx.origin.toString()
}
</script>

<template>
	<NuxtImg
		class="rounded-md outline-2 hover:outline cursor-pointer"
		:src="`https://lib.xiaoshuapp.com/icon/x?url=${getOrigin(props.url)}`"
		:alt="props.url"
		referrerpolicy="no-referrer"
		loading="lazy"
	/>
</template>
