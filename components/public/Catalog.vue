<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

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
  <Sheet>
    <SheetTrigger>
      <button aria-label="catalog"
        class="hover:scale-125 transition-all flex items-center justify-center overflow-hidden w-12 h-12 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-full">
        <Icon name="mdi:menu" />
      </button>
    </SheetTrigger>
    <SheetContent class="w-72">
      <div class="flex py-6 items-center h-full">
        <div class="space-y-1 w-full">
          <div v-for="item in list" :key="item.title" class="item" :class="{
            active: item.active
          }" @click="scrollToTitle(`#${item.anchor}`)">
            <div class="text-base truncate">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>

</template>

<style scoped>
.item {
  @apply flex flex-row justify-between text-base cursor-pointer transition-all hover:bg-gray-100 w-full space-x-3 items-center py-3 px-5 overflow-hidden rounded-xl;
}

.active {
  @apply bg-[#f7d038] text-[#1a1306] hover:bg-[#f7d038];
}
</style>
