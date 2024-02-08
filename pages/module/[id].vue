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
	<UContainer v-if="module">
		<h1>{{ module.title }}</h1>
		<UBadge class="mr-2 -ml-px" color="gray" variant="solid">
			{{ formatDateTime(module.date) }}
		</UBadge>
		<div
			v-for="platform in module.platform"
			:key="platform" class="w-5 h-5 block"
			@click="navigateTo(platform, { open: { target: '_blank' }, external: true })"
		>
			<LinkIcon :url="platform" />
		</div>
		<div class="content" v-html="module.content" />
	</UContainer>
</template>

<style>
h1, h2, h3, h4, h5, h6 {
	font-size: revert;
	font-weight: revert;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
	margin: revert;
}
</style>
