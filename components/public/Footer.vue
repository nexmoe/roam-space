<script setup>
import dayjs from 'dayjs'

const hero = useConfig().hero
</script>

<template>
	<div class="container flex">
		<div class="mb-16">
			Copyright © {{ dayjs(new Date()).format('YYYY') }} {{ hero.title }}, Powered by <a
				class="underline"
				href="https://github.com/nexmoe/roam-space" target="_blank"
			>Roam Space</a>
		</div>
	</div>
</template>
