<script setup lang="ts">
const globalStore = useGlobalStore()
const route = useRoute()

watch(
	() => route.path,
	() => {
		globalStore.setCatalog([])
	},
)
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator
			:duration="1000"
			color="repeating-linear-gradient(90deg, #f7d038, #ffe993)"
		/>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
