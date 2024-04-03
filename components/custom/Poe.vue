<script setup lang="ts">

</script>

<template>
	<div class="pt-12 h-screen pb-12">
		<div class="relative flex flex-row items-center justify-center gap-2 h-full">
			<div class="major text-6xl text-center font-bold tracking-tight text-black">
				谁怕？一蓑烟雨任平生
			</div>
			<div class="poe absolute top-1/2 left-1/2 text-5xl hover:z-20 -translate-x-1/2 -translate-y-1/2">
				<div style="animation: fadeInOut 2s ease-in-out 0s forwards;">
					莫听穿林打叶声
				</div>
				<div style="animation: fadeInOut 2s ease-in-out 1s forwards;">
					何妨吟啸且徐行
				</div>
				<div style="animation: fadeInOut 2s ease-in-out 2s forwards;">
					竹杖芒鞋轻胜马
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.major {
    @apply opacity-0;
    animation: fadeIn 1.5s ease-in-out 3.5s forwards;
}
.poe {
	writing-mode: vertical-lr;
}
.poe div {
	@apply block m-3 z-10 opacity-20 hover:opacity-100 duration-200;
    animation-fill-mode: forwards;
    white-space: nowrap;
 }

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
</style>

<style>
@keyframes fadeInOut {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}
</style>
