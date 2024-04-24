<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)
const globalStore = useGlobalStore()

function handleScroll() {
	showButton.value = window.scrollY > window.innerHeight
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div
		class="fixed z-50 flex flex-col text-2xl space-y-4 bottom-8 right-8 md:bottom-16 md:right-16"
	>
		<!-- <PublicCatalog :list="globalStore.catalog" v-if="globalStore.catalog.length > 0" /> -->
		<transition name="fade">
			<button
				v-if="showButton"
				aria-label="to Top"
				class="hover:scale-125 transition-all flex items-center justify-center overflow-hidden w-12 h-12 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-full"
				@click="scrollToTop()"
			>
				<Icon name="i-ion-arrow-up" />
			</button>
		</transition>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: transform 0.2s;
}

.fade-enter,
.fade-leave-to {
	transform: scale(0);
}
</style>
