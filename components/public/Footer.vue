<script setup>
import dayjs from 'dayjs'

const config = await useGetConfig()
</script>

<template>
	<footer class="bg-white dark:bg-gray-900">
		<div class="mx-auto w-full max-w-screen-xl">
			<div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
					<ul class="text-gray-500 dark:text-gray-400 font-medium">
						<li class="mb-4">
							<a href="#" class=" hover:underline">About</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Careers</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Brand Center</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Blog</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
					<ul class="text-gray-500 dark:text-gray-400 font-medium">
						<li class="mb-4">
							<a href="#" class="hover:underline">Discord Server</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Twitter</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Facebook</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Contact Us</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
					<ul class="text-gray-500 dark:text-gray-400 font-medium">
						<li class="mb-4">
							<a href="#" class="hover:underline">Privacy Policy</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Licensing</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Terms &amp; Conditions</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
					<ul class="text-gray-500 dark:text-gray-400 font-medium">
						<li class="mb-4">
							<a href="#" class="hover:underline">iOS</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Android</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">Windows</a>
						</li>
						<li class="mb-4">
							<a href="#" class="hover:underline">MacOS</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="px-4 py-6 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {{ dayjs(new
					Date()).format('YYYY') }} {{ config.siteName }} All Rights Reserved. Powered by <a class="underline"
						href="https://github.com/nexmoe/roam-space" target="_blank">Roam Space</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	padding-left: var(--n-spacing)
}
</style>
