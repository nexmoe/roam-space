<script setup lang="ts">
const hero = useConfig().hero
</script>

<template>
	<div class="transition-all rounded-2xl md:py-8 flex flex-col justify-center items-center gap-4">
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
</template>
