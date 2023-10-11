<script setup>
const props = defineProps({
	item: Object,
});
</script>

<template>
	<div
		class="module hover:scale-105 hover:shadow-2xl transition-all py-8 h-full overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5"
	>
		<div class="px-10">
			<div class="mt-1 mb-5 h-12 w-12 rounded-lg">
				<NuxtImg
					width="48px"
					height="48px"
					:src="props.item.logo"
					loading="lazy"
					:title="props.item.title"
				/>
			</div>
			<div
				class="text-xl font-bold tracking-tight text-black"
				:style="{ color: props.item.color }"
			>
				{{ props.item.title }}
			</div>
			<div
				class="mt-3 text-base leading-7 text-gray-500"
				v-html="props.item.des"
			></div>
		</div>
	</div>
</template>
