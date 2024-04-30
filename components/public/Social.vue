<script setup lang="ts">
const props = defineProps<Props>()

const iconMap = {
	github: 'mdi:github',
	telegram: 'mdi:telegram',
	medium: 'mdi:medium',
	twitter: 'mdi:twitter',
	bilibili: 'i-ri-bilibili-fill',
}

type IconKey = keyof typeof iconMap

export interface Props {
	url: string
	icon: IconKey
	name: string
}
</script>

<template>
	<a
		class="text-2xl text-gray-600 flex"
		:href="url"
		target="_blank"
		:title="props.name"
	>
		<Icon :name="iconMap[props.icon]" />
	</a>
</template>
