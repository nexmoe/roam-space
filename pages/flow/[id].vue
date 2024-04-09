<script setup>
const id = useRoute().params.id
const { $client } = useNuxtApp()
const flow = await $client.flow.get.query({ id })

provide('flow', flow)
</script>

<template>
	<div class="container">
		<PublicProse v-if="flow.description" :title="flow.title">
			{{ flow.description }}
		</PublicProse>
		<PublicProse v-else :title="flow.title" />
		<Flow v-if="flow.module.length > 0" v-bind="{ flow, header: false }" />
	</div>
</template>
