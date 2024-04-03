<script setup>
const config = useConfig()
const menus = config.hero.menus
</script>

<template>
	<div class="header flex py-4 px-8 bg-white shadow-md">
		<div class="flex-1 flex items-center">
			<div class="author">NEXMOE</div>
		</div>
		<div class="flex-2 tab rounded-full">
			<a v-for="item in menus" :key="item.title" class="item" :href="item.url" target="_blank">
				<div class="text-base truncate">
					{{ item.title }}
				</div>
				<UIcon name="i-mdi-open-in-new" />
			</a>
		</div>
		<div class="flex-1 flex items-center justify-end">1111</div>
	</div>
</template>

<style scoped>
.tab {
	@apply flex items-center justify-center gap-2 px-3 mx-auto;
	width: fit-content;
}

.item {
	@apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 space-x-2 items-center py-1 px-3 overflow-hidden rounded-full;
}

.author {
	@apply w-fit px-1 bg-red-600 text-white border-2 border-white outline outline-1 outline-red-600;
}
</style>