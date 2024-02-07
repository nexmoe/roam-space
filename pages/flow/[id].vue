<script setup>
const id = useRoute().params.id

const { data: module } = useFetch(`/api/flow/${id}`)
</script>

<template>
	<div>
		{{ module }}
	</div>
</template>
