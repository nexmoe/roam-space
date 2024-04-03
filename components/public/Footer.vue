<script setup>
import dayjs from 'dayjs'

const hero = useConfig().hero
</script>

<template>
	<div class="flex">
		<div class="m-8 mb-16 px-4 pt-0.5 pb-1">
			Copyright © {{ dayjs(new Date()).format('YYYY') }} {{ hero.title }}, Powered by <a
				class="underline"
				href="https://github.com/nexmoe/roam-space" target="_blank"
			>Roam Space</a>
		</div>
	</div>
</template>
