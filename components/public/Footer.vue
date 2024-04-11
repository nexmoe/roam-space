<script setup>
import dayjs from 'dayjs'

const config = await useGetConfig()
</script>

<template>
	<div class="container flex">
		<div class="footer my-16">
			Copyright © {{ dayjs(new Date()).format('YYYY') }} {{ config.siteName }}, Powered by <a
				class="underline"
				href="https://github.com/nexmoe/roam-space" target="_blank"
			>Roam Space</a>
		</div>
	</div>
</template>

<style>
.footer {
	padding-left: var(--n-spacing)
}
</style>
