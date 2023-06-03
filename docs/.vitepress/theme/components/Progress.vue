<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch} from 'vue'
import {useData} from "vitepress"

const {title} = useData()
const scrollPosition = ref(0)
const pageHeight = ref(0)
const scrollPercentage = ref(0)

const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY
}

const updatePageHeight = () => {
  pageHeight.value = document.documentElement.scrollHeight - document.documentElement.clientHeight
}

watch([scrollPosition, pageHeight], () => {
  scrollPercentage.value = (scrollPosition.value / pageHeight.value) * 100;
})

onMounted(() => {
  updateScrollPosition()
  updatePageHeight()
  window.addEventListener('scroll', updateScrollPosition)
  window.addEventListener('scroll', updatePageHeight)
  window.addEventListener('resize', updateScrollPosition)
  window.addEventListener('resize', updatePageHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
  window.removeEventListener('scroll', updatePageHeight)
  window.removeEventListener('resize', updateScrollPosition)
  window.removeEventListener('resize', updatePageHeight)
})
</script>

<template>
  <Teleport to="body">
    <progress class="progress" :value="scrollPercentage" max="100"/>
  </Teleport>
</template>

<style scoped>
.progress {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 5px;
  background-color: transparent;
  border: none;
  color: var(--my-blue);
  border-radius: 10px;
}

.progress::-webkit-progress-bar {
  background-color: transparent;
}

.progress::-webkit-progress-value {
  border-radius: 10px;
  background: var(--my-blue);
}

.progress::-moz-progress-bar {
  border-radius: 10px;
}
</style>
