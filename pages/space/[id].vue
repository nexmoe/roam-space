<script setup lang="ts">
const id = useRoute().params.id as string
const { $client } = useNuxtApp()

const space = await $client.space.get.query({ id })
const config = await useGetConfig()

if (!space) {
	throw createError({
		statusCode: 404,
	})
}

defineOgImageComponent('NuxtSeo', {
	theme: config.ogTheme,
	title: space.title,
	description: space.description,
})
</script>

<template>
	<div class="page">
		<div class="container">
			<PublicProse
				v-if="space.description"
				:title="space.title"
			>
				{{ space.description }}
			</PublicProse>
			<PublicProse
				v-else
				:title="space.title"
			/>
			<SpaceFlow v-bind="{ header: false, space }" />
			<template
				v-for=" flow in space.flows"
				:key="flow.id"
			>
				<LazyFlow
					v-if="flow.module.length > 0"
					v-bind="{ flow }"
				/>
			</template>
		</div>
	</div>
</template>

<style scoped>
.sidebar {
	@apply fixed w-0 lg:w-64 bg-white h-full;
}

.content {
	@apply lg:pl-72 lg:pr-8;
}
</style>
