<script setup>
const hero = useConfig().hero
</script>

<template>
	<div class="transition-all rounded-2xl md:py-8 flex items-center text-white space-x-4">
		<UTooltip class="hidden md:block" :text="hero.avatarTip">
			<NuxtImg class="h-32 w-32 rounded-full" height="128px" width="128px" :alt="hero.title" :src="hero.avatar" />
		</UTooltip>
		<div class="space-y-2">
			<div class="text-2xl font-bold drop-shadow-md">
				{{ hero.title }}
			</div>
			<div class="flex flex-row flex-wrap -ml-px gap-2">
				<div
					v-for="item in hero.tags" :key="item"
					class="bg-white px-3 py-1 rounded-full inline-block text-black text-sm"
				>
					{{ item }}
				</div>
			</div>
			<div class="flex flex-wrap -ml-px gap-1">
				<Social
					v-for="item in hero.socials" :key="item" :url="item.url" :icon="item.icon" :color="item.color"
					:tip="item.name" :path="item.path"
				/>
			</div>
		</div>
	</div>
</template>
