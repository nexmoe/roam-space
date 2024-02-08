<script setup lang="ts">
import type { Flow } from '@prisma/client'

interface List extends Flow {
	active: boolean
}
const flows = inject('flows') as Flow[]

const list = ref<List[]>(flows as List[]) // .filter(flow => flow.module.length > 0)
const menus = useConfig().hero.menus

function scrollToTitle(title: string) {
	const element: HTMLElement | null = document.querySelector(decodeURI(title))
	if (!element)
		return

	element.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

function updateActiveSection() {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	const screenHeight = window.innerHeight

	let activeSectionIndex = 0
	let minDistanceToCenter = Number.POSITIVE_INFINITY

	list.value.forEach((section, index) => {
		const element = document.getElementById(section.title)
		if (element) {
			const elementTop = element.offsetTop
			const elementBottom = elementTop + element.offsetHeight
			const distanceToCenter = Math.abs(
				(elementTop + elementBottom) / 2 - (scrollTop + screenHeight / 2),
			)

			if (distanceToCenter < minDistanceToCenter) {
				activeSectionIndex = index
				minDistanceToCenter = distanceToCenter
			}
		}
	})

	list.value.forEach((section, index) => {
		if (index === activeSectionIndex)
			section.active = true
		else section.active = false
	})
}

onMounted(() => {
	window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
	window.removeEventListener('scroll', updateActiveSection)
})

list.value[0].active = true
</script>

<template>
	<div class="hidden md:flex py-6 px-4 items-center h-full shu-card !rounded-none">
		<div class="space-y-1 w-full">
			<a v-for="item in menus" :key="item.title" class="item" :href="item.url" target="_blank">
				<div class="text-base truncate">
					{{ item.title }}
				</div>
				<UIcon name="i-mdi-open-in-new" />
			</a>
			<div class="border-b pt-3 !mb-4" />
			<div
				v-for="item in list"
				:key="item.title"
				class="item"
				:class="{
					active: item.active,
				}"
				@click="scrollToTitle(`#${item.title}`)"
			>
				<div class="text-base truncate">
					{{ item.title }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.item {
	@apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 w-full space-x-3 items-center py-3 px-5 overflow-hidden rounded-xl;
}
.active {
	@apply bg-black text-white hover:bg-black;
}
</style>
