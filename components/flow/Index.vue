<script setup>
const props = defineProps({
	section: Object,
});

// const mergeArrays = (mergedArray, array2) => {
// 	for (const ele of array2) {
// 		const index = mergedArray.findIndex(
// 			(exist) => exist.title === ele.title
// 		);

// 		if (index === -1) {
// 			mergedArray.push(ele);
// 		} else {
// 			if (!mergedArray[index].platform.includes(ele.platform)) {
// 				mergedArray[index].platform.push(ele.platform);
// 			}
// 		}
// 	}

// 	mergedArray.sort((a, b) => {
// 		const dateA = new Date(a.date);
// 		const dateB = new Date(b.date);
// 		return dateB - dateA;
// 	});

// 	return mergedArray;
// };

// const res = ref([]);

// if (section.api.length > 1) {
// 	const fetchPromises = section.api.map(async (element) => {
// 		const { url, adapter } = element;
// 		const { data, pending, error, refresh } = await useFetch(url);
// 		return useAdapter(adapter, data.value).slice(0, 8);
// 	});

// 	const results = await Promise.all(fetchPromises);

// 	let merged = [];
// 	for (const result of results) {
// 		merged = mergeArrays(merged, result);
// 	}

// 	console.log(merged[merged.length - 1]);

// 	res.value = merged;
// } else {
// 	const { url, adapter } = section.api[0];
// 	const { data, pending, error, refresh } = await useFetch(url);

// 	if (error.value) {
// 		console.error(`Error fetching data from ${url}:`, error.value);
// 	} else {
// 		res.value = useAdapter(adapter, data.value).slice(0, 8);
// 	}
// }
const requestURL = computed(() => `/api/flow/${encodeURI(props.section.title)}`)
const { data, pending, error } = await useFetch(requestURL, { immediate: true })
// TODO: handle error
if (error.value || data.value.code !== 0) {
	console.error(`Error fetching data from ${url}:`, error.value, data.value);
}
const res = computed(() => data.value.data)
</script>

<template>
	<FlowHeader :title="section.title" :url="section.homepage" />

	<div
		class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4"
		:class="section.class"
	>
		<a :href="item.url" target="_blank" v-for="item in res" :key="item.url">
			<ModuleList
				v-if="section.card == 'list'"
				v-bind="{ item, section }"
			/>
			<ModuleImage v-else v-bind="{ item, section }" />
		</a>
	</div>
</template>
