<script setup lang="ts">
const config = useConfig()
const menus = config.hero.menus
const socials = config.hero.socials
</script>

<template>
	<div class="header flex py-4 px-10">
		<div class="flex-1 flex items-center">
			<NuxtLink :to="'/'" class="flex items-center gap-2">
				<NuxtImg class="w-8 rounded-full" src="https://unavatar.io/nexmoe" />
				<div>NEXMOE</div>
			</NuxtLink>
		</div>
		<div class="flex-2 tab nexmoe-shadow  rounded-full">
			<NuxtLink class="item" :class="{
				active: $route.path === item.url
			}" :target="item.url.startsWith('https://') ? '_blank' : ''" v-for="item in menus" :key="item.title" :to="item.url">
				<div class="text-base truncate">
					{{ item.title }}
				</div>
				<Icon v-if="item.url.startsWith('https://')" name="mdi:open-in-new" />
			</NuxtLink>
		</div>
		<div class="flex-1 flex items-center flex-row gap-3 justify-end">
			<Social v-for="item in socials" :key="item.url" :url="item.url" :icon="item.icon" :color="item.color"
				:tip="item.name" :path="item.path" />
		</div>
	</div>
</template>

<style scoped>
.tab {
	@apply flex items-center justify-center gap-2 py-2 px-3 mx-auto bg-white;
	width: fit-content;
}

.item {
	@apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 space-x-2 items-center py-1 px-3 overflow-hidden rounded-full;
}
.item.active {
	@apply bg-gray-100;
}
.author {}
</style>