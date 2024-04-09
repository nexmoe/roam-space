<script setup lang="ts">
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetTrigger,
// } from '@/components/ui/sheet'

const config = await useGetConfig()
</script>

<template>
	<div class="container header justify-between flex pt-6">
		<div class="flex-1 flex items-center">
			<NuxtLink :to="'/'" class="flex items-center gap-2">
				<NuxtImg class="w-8 rounded-full" :src="config.avatar" />
				<div class="uppercase">{{ config.title }}</div>
			</NuxtLink>
		</div>
		<div class="hidden md:flex flex-row gap-6">
			<div class="flex flex-2 tab rounded-full">
				<NuxtLink class="item" :class="{
				active: $route.path === item.url
			}" :target="item.url.startsWith('https://') ? '_blank' : ''" v-for="item in config.menus" :key="item.title"
					:to="item.url">
					<div class="text-base truncate">
						{{ item.title }}
					</div>
					<Icon v-if="item.url.startsWith('https://')" name="mdi:open-in-new" />
				</NuxtLink>
			</div>
			<div class="flex flex-1 items-center flex-row gap-3 justify-end">
				<Social v-for="item in config.socials" v-bind="item" :key="item.url" />
			</div>
		</div>
		<!-- <Sheet>
			<SheetTrigger>
				<div class="md:hidden text-2xl text-gray-600 flex">
					<Icon name="mdi:menu" />
				</div>
			</SheetTrigger>
			<SheetContent>
				<div class="py-6 gap-3 flex flex-col">
					<NuxtLink class="item !py-3 !px-3" :class="{
				active: $route.path === item.url
			}" :target="item.url.startsWith('https://') ? '_blank' : ''" v-for="item in config.menus" :key="item.title"
						:to="item.url">
						<div class="text-base truncate">
							{{ item.title }}
						</div>
						<Icon v-if="item.url.startsWith('https://')" name="mdi:open-in-new" />
					</NuxtLink>
					<div class="flex items-center flex-row gap-3">
						<div v-for="item in config.socials" :key="item.url" class="item !p-3">
							<Social v-bind="item" />
						</div>
					</div>
				</div>

			</SheetContent>
		</Sheet> -->
	</div>
</template>

<style scoped>
.tab {
	@apply items-center justify-center gap-2 py-2 px-3 mx-auto bg-white;
	width: fit-content;
}

.item {
	@apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 space-x-2 items-center py-1 px-3 overflow-hidden rounded-full;
}

.item.active {
	@apply bg-[#f7d038] text-[#1a1306];
}

.author {}
</style>