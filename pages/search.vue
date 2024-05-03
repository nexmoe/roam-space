<script setup lang="ts">
const { $client } = useNuxtApp()
const modules = await $client.module.search.query({
	query: 'tail',
})

const query = ref('tail')
</script>

<template>
	<div class="page">
		<div class="container">
			<div class="py-36">
				<form class="max-w-lg mx-auto">
					<label
						for="default-search"
						class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>Search</label>
					<div class="relative">
						<div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
							<svg
								class="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							id="default-search"
							type="search"
							class="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Mockups, Logos..."
							required
                            v-model="query"
						>
						<button
							type="submit"
							class="text-primary-foreground hover:bg-blue-800 absolute end-2.5 bottom-2.5 bg-primary focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div
				v-if="modules.length > 0"
				class="flow-body n-grid"
			>
				<NuxtLink
					v-for="module in modules"
					:key="module.url"
					:title="module.title"
					:to="module.url"
					target="_blank"
				>
					<LazyModuleImage v-bind="{ module }" />
				</NuxtLink>
			</div>
			<div
				v-else
				class="h-64 flex justify-center w-full items-center"
			>
				暂无搜索结果
			</div>
		</div>
	</div>
</template>

<style scoped></style>
