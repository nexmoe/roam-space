<script setup lang="ts">
interface List {
  active: boolean
  title: string
  anchor: string
}

interface Props {
  list: List[]
}

const props = defineProps<Props>()

let activeSectionIndex = 0

function scrollToTitle(anchor: string) {
  const element = document.querySelector(decodeURI(anchor)) as HTMLElement | null
  if (element) {
    element.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
}

function updateActiveSection() {
  const screenHeight = window.innerHeight

  props.list.forEach((section, index) => {
    const element = document.getElementById(section.title)
    if (element) {
      const rect = element.getBoundingClientRect()

      if (rect.top < screenHeight / 2) {
        activeSectionIndex = index
      }
    }
  })

  props.list.forEach((section, index) => {
    section.active = index === activeSectionIndex
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="hidden md:flex py-6 px-4 items-center h-full shu-card !rounded-none">
    <div class="space-y-1 w-full">
      <div v-for="item in list" :key="item.title" class="item" :class="{
        active: item.active,
      }" @click="scrollToTitle(`#${item.anchor}`)">
        <div class="text-base truncate">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 w-full space-x-3 items-center py-3 px-5 overflow-hidden rounded-xl;
}

.active {
  @apply bg-black text-white hover:bg-black;
}
</style>
