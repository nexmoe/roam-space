<script setup lang="ts">
const hero = useConfig().hero
</script>

<template>
	<div class="transition-all rounded-2xl md:py-8 flex items-center space-x-4">
		<UTooltip v-if="hero.avatarTip" class="hidden md:block aspect-square" :text="hero.avatarTip">
			<NuxtImg class="hidden md:block h-32 w-32 shu-card !rounded-full aspect-square" height="128px" width="128px" :alt="hero.title" :src="hero.avatar" />
		</UTooltip>
		<NuxtImg v-else class="h-32 w-32 rounded-full" height="128px" width="128px" :alt="hero.title" :src="hero.avatar" />
		<div class="space-y-2 mb-3">
			<div class="text-3xl font-bold drop-shadow-md">
				{{ hero.title }}
			</div>
			<div class="flex flex-row flex-wrap -ml-px gap-2">
				<div
					v-for="item in hero.tags" :key="item"
					class="text-black inline-block shu-card text-sm px-3 py-0.5 !rounded-full"
				>
					{{ item }}
				</div>
			</div>
			<div class="flex flex-wrap -ml-px gap-1">
				<Social
					v-for="item in hero.socials" :key="item.url" :url="item.url" :icon="item.icon" :color="item.color"
					:tip="item.name" :path="item.path"
				/>
			</div>
		</div>
	</div>
</template>
