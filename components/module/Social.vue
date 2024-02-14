<script setup lang="ts">
interface Props {
	module: NModule
}
interface Swo {
	source: string
	key: string
	failed: boolean
	count: number
}

const props = defineProps<Props>()

const { data: res } = await useFetch<Swo>(`https://api.swo.moe/stats/${extractPlatformUsername(props.module.url)}`)

</script>

<template>
	<div class="module shu-card space-x-4 py-4 px-5">
		{{ props.module.title }} {{ res?.count ? `${res?.count} Followers` : "" }}
	</div>
</template>
