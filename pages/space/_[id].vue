<script setup lang="ts">
const id = useRoute().params.id

const { data: space, error } = useFetch(`/api/space/${id}`)
if (error.value)
	console.error(`Error fetching data`, error.value)
	// const toast = useToast()
	// toast.add({ title: 'Error fetching data' })

const flows = space.flow

provide('flows', flows)
</script>

<template>
	<div class="page">
		<div class="sidebar">
			<IndexCatalog />
		</div>
		<div class="content">
			<UContainer class="px-6 lg:px-12 pb-24 pt-16">
				<template v-for="flow in flows" :key="flow.id">
					<Flow v-if="flow.module.length > 0" v-bind="{ flow }" />
				</template>
			</UContainer>
			<IndexTool />
			<IndexFooter />
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
