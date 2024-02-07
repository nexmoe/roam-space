<script setup>
const id = useRoute().params.id

const { data: module } = useFetch(`/api/module/${id}`)
</script>

<template>
	<div>
		{{ module }}
	</div>
</template>
