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
        <div v-if="$slots.default" class="description flex text-3xl flex-col gap-4 text-neutral-600">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.prose {
    @apply pt-20 pb-24 flex flex-col gap-4;
    max-width: 70ch;
    font-size: 1rem;
    line-height: 1.75;
    padding-left: var(--n-spacing)
}
</style>
