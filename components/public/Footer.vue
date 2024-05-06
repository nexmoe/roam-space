<script setup lang="ts">
import dayjs from 'dayjs'

interface List {
	title: string
	url: string
}

export interface Sitemap {
	title: string
	list: List[]
}

export interface Props {
	sitemap?: Sitemap[]
	siteName: string
}

const props = defineProps<Props>()
</script>

<template>
	<footer class="mt-12 bg-white dark:bg-gray-900">
		<div class="mx-auto w-full max-w-screen-xl">
			<div v-if="props.sitemap" class="grid grid-cols-2 gap-8 px-4 pt-12 lg:py-8 md:grid-cols-4">
				<div v-for="item in props.sitemap" :key="item.title">
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ item.title }}</h2>
					<ul v-for="list in item.list" :key="list.title"
						class="text-gray-500 dark:text-gray-400 font-medium">
						<li class="mb-4">
							<a :href="list.url" class="hover:underline">{{ list.title }}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="px-4 py-6 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {{ dayjs(new
			Date()).format('YYYY') }} {{ props.siteName }} All Rights Reserved. Powered by <a class="underline"
						href="https://github.com/nexmoe/roam-space" target="_blank">Roam Space</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	padding-left: var(--n-spacing)
}
</style>
