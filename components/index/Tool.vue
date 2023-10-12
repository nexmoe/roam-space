<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)
const isOpen = ref(false)
const list = useConfig().flow

function handleScroll() {
	showButton.value = window.scrollY > window.innerHeight
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

function scrollToTitle(title) {
	window.scroll({
		top: document.querySelector(decodeURI(title)).offsetTop - 96,
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
	<USlideover
		v-model="isOpen"
		:ui="{
			width: 'max-w-xs',
			base: 'relative flex-1 flex flex-col w-full focus:outline-none shadow-2xl',
		}"
	>
		<div class="p-6 flex items-center h-full">
			<div class="space-y-1 w-full">
				<div
					v-for="item in list"
					:key="item.title"
					class="cursor-pointer transition-all hover:bg-gray-100 w-full flex space-x-3 items-center py-3 px-4 overflow-hidden rounded-2xl"
					@click="scrollToTitle(`#${item.title}`)"
				>
					<div class="text-base truncate">
						{{ item.title }}
					</div>
				</div>
			</div>
		</div>
	</USlideover>
	<div
		class="fixed flex flex-col text-2xl space-y-4 bottom-8 right-8 md:bottom-16 md:right-16"
	>
		<button
			aria-label="Menu"
			class="hover:scale-125 transition-all flex items-center justify-center overflow-hidden w-12 h-12 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-full"
			@click="isOpen = true"
		>
			<UIcon name="i-ion-menu" />
		</button>
		<transition name="fade">
			<button
				v-if="showButton"
				aria-label="to Top"
				class="hover:scale-125 transition-all flex items-center justify-center overflow-hidden w-12 h-12 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-full"
				@click="scrollToTop()"
			>
				<UIcon name="i-ion-arrow-up" />
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
