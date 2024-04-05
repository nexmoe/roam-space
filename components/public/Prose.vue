<script setup lang="ts">
interface Props {
    title: string;
}
const props = defineProps<Props>()
</script>

<template>
    <div class="container">
        <div class="prose">
            <h1 class="font-bold text-3xl">
                {{ props.title }}
            </h1>
            <div class="description flex flex-col gap-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.prose {
    @apply pt-12 pb-16 flex flex-col gap-4;
    max-width: 70ch;
    font-size: 1rem;
    line-height: 1.75;
    font-family: Noto Serif SC;
    padding-left: var(--n-spacing)
}
</style>
