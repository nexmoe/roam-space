<script setup lang="ts">
const id = useRoute().params.id

const { data: module, error } = useFetch(`/api/module/${id}`)

if (error.value || module.value) {
	console.error(`Error fetching data`, error.value)
	const toast = useToast()
	toast.add({ title: 'Error fetching data' })
}
</script>

<template>
	<div class="page-module">
		<UContainer
			v-if="module" class="relative max-w-4xl bg-white px-4 sm:px-8 lg:px-12 pb-48"
		>
			<UButton
				class="sticky rounded-full top-32 left-0 -ml-12 -translate-x-1/2" icon="i-heroicons-chevron-left"
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
				<LinkIcon v-for="platform in module.platform" :key="platform" class="w-6 h-6 block" :url="platform" @click="navigateTo(platform, { open: { target: '_blank' }, external: true })" />
			</div>
			<div class="my-6 border-b border-gray-200 w-1/3" />
			<div class="apple-markdown" v-html="module.content" />
		</UContainer>
	</div>
</template>

<style>
.page-module {
	@apply min-h-screen;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
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
  @apply list-inside;
  @apply my-6;
}

.apple-markdown ol {
  @apply list-decimal;
  @apply list-inside;
  @apply my-6;
}

.apple-markdown li {
  @apply mb-3;
  @apply text-lg;
  @apply pl-4;
}

.apple-markdown code {
  @apply bg-gray-100;
  @apply text-base;
  @apply p-1;
  @apply rounded-md;
  @apply font-mono;
  @apply shadow-sm;
}

.apple-markdown pre {
  @apply bg-gray-800;
  @apply text-white;
  @apply text-base;
  @apply p-6;
  @apply my-6;
  @apply overflow-x-auto;
  @apply rounded-lg;
  @apply shadow-md;
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
  @apply shadow-lg;
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
