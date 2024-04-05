<script setup lang="ts">
interface Props {
    title: string;
}
const props = defineProps<Props>()
</script>

<template>
    <div class="prose">
        <h1 class="font-bold text-3xl">
            {{ props.title }}
        </h1>
        <div class="description flex flex-col gap-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.prose {
    @apply pb-16 pt-12 m-auto flex flex-col gap-4;
    max-width: 70ch;
    font-size: 1rem;
    line-height: 1.75;
}
</style>
