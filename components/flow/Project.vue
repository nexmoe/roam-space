<script setup>
const props = defineProps({
	url: String,
	title: String,
	list: Array,
	section: Object,

})
const section = props.section
</script>

<template>
	<FlowHeader :title="props.title" :url="props.url" />

	<div class="flow-body">
		<div v-for="item in props.list" :key="item.url">
			<a :href="item.url" target="_blank">
				<ModuleProject :item="item" :section="section" />
			</a>
		</div>
	</div>
</template>
