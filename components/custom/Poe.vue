<script setup lang="ts">

</script>

<template>
	<div class="body pt-12 h-screen pb-12">
		<div class="relative flex flex-row items-center justify-center gap-2 h-full">
			<div class="major text-7xl text-center font-bold tracking-tight text-black">
				谁怕？一蓑烟雨任平生
			</div>
			<div class="poe absolute top-1/2 left-1/2 text-6xl hover:z-20 -translate-x-1/2 -translate-y-1/2">
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
.body {
	font-family: Zhi Mang Xing;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' fill='rgb(195,195,195)'%3E%3Ccircle cx='16' cy='16' r='1'/%3E%3C/svg%3E");
}

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
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>

<style>
@keyframes fadeInOut {

	0%,
	100% {
		opacity: 0.2;
	}

	50% {
		opacity: 1;
	}
}
</style>
