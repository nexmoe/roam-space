<script setup>
const id = useRoute().params.id

const { data: module } = useFetch(`/api/module/${id}`)
</script>

<template>
	<div>
		<div class="content" v-html="module.content" />
	</div>
</template>
