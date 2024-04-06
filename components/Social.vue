<script setup lang="ts">
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

interface Props {
	url: string
	path: string
	icon: string
	tip: string
}

const props = defineProps<Props>()

const iconMap = {
	github: 'mdi:github',
	telegram: 'mdi:telegram',
	medium: 'mdi:medium',
	twitter: 'mdi:twitter',
	bilibili: 'i-ri-bilibili-fill',
}

let res = {}
if (props.path) {
	const { data } = await useFetch(`https://api.swo.moe/stats/${props.path}`)
	res = data
}
</script>

<template>
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				<a class="text-2xl text-gray-600 flex" :href="url" target="_blank" :title="props.tip">
					<Icon :name="iconMap[props.icon]" />
				</a>
			</TooltipTrigger>
			<TooltipContent>
				<p>
					{{ props.tip }} {{ res.count ? `${res.count} 粉` : "" }}
				</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
</template>
