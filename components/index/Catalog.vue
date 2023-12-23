<script setup lang="ts">
const list = useConfig().flow
const menus = useConfig().hero.menus
function scrollToTitle(title: string) {
	const element: HTMLElement | null = document.querySelector(decodeURI(title))
	if (!element)
		return
	window.scroll({
		top: element.offsetTop - 96,
		behavior: 'smooth',
	})
}
</script>

<template>
	<div class="py-6 px-4 flex items-center h-full shu-card">
		<div class="space-y-1 w-full">
			<a
				v-for="item in menus"
				:key="item.title"
				class="item"
				:href="item.url"
				target="_blank"
			>
				<div class="text-base truncate">
					{{ item.title }}
				</div>
                <UIcon name="i-mdi-open-in-new" />
			</a>
			<div
				v-for="item in list"
				:key="item.title"
				class="item"
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
    @apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-800 w-full space-x-3 items-center py-3 px-5 overflow-hidden rounded-2xl;
}
</style>
