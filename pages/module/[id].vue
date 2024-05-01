<script setup lang="ts">
const id = useRoute().params.id as string
const useImg = useImage()
const { $client } = useNuxtApp()

// Fetching data from the server side only
const module = await $client.module.get.query({ id })

function replaceImg(html: string) {
	// Define a regular expression to match img tags and capture the src attribute
	const imgRegex = /<img [^>]*src="([^"]*)"[^>]*>/gi

	// Replace the src attribute in each img tag
	html = html.replace(imgRegex, (match: string, src: string) => {
		// Replace the src with the new value from useImg function
		const newSrc = useImg(src)
		// Return the modified img tag
		return match.replace(src, newSrc)
	})

	// Return the modified HTML string
	return html
}
</script>

<template>
	<div class="page-module">
		<UContainer
			v-if="module"
			class="relative max-w-4xl bg-white px-4 sm:px-8 lg:px-12 pb-48"
		>
			<UButton
				class="sticky rounded-full top-32 left-0 -ml-12 -translate-x-1/2"
				icon="i-heroicons-chevron-left"
				square
				size="xl"
				variant="solid"
				color="white"
				to="/"
			/>
			<h1 class="title">
				{{ module.title }}
			</h1>
			<div class="flex flex-row items-center gap-2">
				<div class="mr-4 text-lg">
					{{ formatDateTime(module.date) }}
				</div>
				<LinkIcon
					v-for="platform in module.platform"
					:key="platform"
					class="w-6 h-6 block"
					:url="platform"
					@click="navigateTo(platform, { open: { target: '_blank' }, external: true })"
				/>
			</div>
			<div class="my-6 border-b border-gray-200 w-1/3" />
			<div
				class="apple-markdown"
				v-html="replaceImg(module.content)"
			/>
		</UContainer>
	</div>
</template>

<style>
.page-module {
	@apply min-h-screen;
}

.apple-markdown {
  @apply text-gray-900;
  @apply font-sans;
  @apply leading-normal;
  @apply mx-auto;
}

.apple-markdown h1, .title {
  @apply text-5xl;
  @apply font-black;
  @apply mt-12;
  @apply mb-10;
  @apply leading-none;
  @apply tracking-tight;
}

.apple-markdown h2 {
  @apply text-3xl;
  @apply font-bold;
  @apply mt-10;
  @apply mb-8;
  @apply leading-tight;
}

.apple-markdown h3 {
  @apply text-2xl;
  @apply font-semibold;
  @apply mt-8;
  @apply mb-6;
  @apply leading-snug;
}

.apple-markdown p {
  @apply my-6;
  @apply text-lg;
}

.apple-markdown ul {
  @apply list-inside list-disc my-6;
  @apply text-base text-gray-700;
  @apply pl-4;
}

.apple-markdown ol {
  @apply list-decimal list-inside my-6;
  @apply text-base text-gray-700;
  @apply pl-4;
}

.apple-markdown li {
  @apply mb-2;
  @apply text-base text-gray-700;
  @apply leading-6;
}

.apple-markdown code {
  @apply bg-gray-100 text-sm px-2 py-1 rounded-md font-mono shadow-sm border border-gray-300;
}

.apple-markdown pre {
  @apply bg-gray-800 text-white text-sm p-4 my-4 overflow-x-auto rounded-lg shadow-lg;
}

.apple-markdown pre code {
  @apply bg-transparent p-0;
  @apply border-none;
  @apply shadow-none;
}

.apple-markdown blockquote {
  @apply border-l-4;
  @apply border-gray-500;
  @apply italic;
  @apply pl-4;
  @apply my-6;
  @apply text-lg;
  @apply leading-relaxed;
}

.apple-markdown a {
  @apply text-blue-700;
  @apply hover:text-blue-800;
  @apply underline;
  @apply transition-colors;
  @apply duration-200;
}

.apple-markdown img {
  @apply my-6;
  @apply mx-auto;
}

.apple-markdown hr {
  @apply border-t;
  @apply my-8;
}

/* Responsive typography */
@media (max-width: 768px) {
  .apple-markdown h1 {
    @apply text-4xl;
  }
  .apple-markdown h2 {
    @apply text-3xl;
  }
  .apple-markdown h3 {
    @apply text-xl;
  }
}
</style>
