<script setup>
const config = useConfig()
const menus = config.hero.menus
</script>

<template>
	<div class="tab rounded-full absolute z-10 left-1/2 -translate-x-1/2 card">
		<NuxtLink class="item" to="/">首页</NuxtLink>
        <a v-for="item in menus" :key="item.title" class="item" :href="item.url" target="_blank">
			<div class="text-base truncate">
				{{ item.title }}
			</div>
			<UIcon name="i-mdi-open-in-new" />
		</a>
	</div>
</template>

<style scoped>
.tab {
    @apply flex items-center justify-center gap-2 py-2 px-3 mx-auto mt-12;
    width: fit-content;
}
.item {
	@apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 space-x-2 items-center py-1 px-3 overflow-hidden rounded-full;
}
</style>