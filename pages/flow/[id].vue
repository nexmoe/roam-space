<script setup lang="ts">
const id = useRoute().params.id
const { $client } = useNuxtApp()
const flow = await $client.flow.get.query({ id })
const config = await useGetConfig()

provide('flow', flow)

defineOgImageComponent('NuxtSeo', {
	theme: config.ogTheme,
	title: flow.title,
	description: flow.description,
})
</script>

<template>
	<div class="container">
		<Head>
			<Title>{{ flow.title }}</Title>
		</Head>
		<PublicProse v-if="flow.description" :title="flow.title">
			{{ flow.description }}
		</PublicProse>
		<PublicProse v-else :title="flow.title" />
		<Flow v-if="flow.module.length > 0" v-bind="{ flow, header: false }" />
	</div>
</template>
