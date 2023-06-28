<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrollPosition = ref(0)
const pageHeight = ref(0)
const scrollPercentage = ref(0)

function updateProgress() {
  scrollPosition.value = window.scrollY
  pageHeight.value = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollPercentage.value = (scrollPosition.value / pageHeight.value) * 100
}
onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  window.addEventListener('scroll', updateProgress)
})

onUnmounted(() => {
  window.addEventListener('scroll', updateProgress)
  window.addEventListener('scroll', updateProgress)
})
</script>

<template>
  <Teleport to="body">
    <progress class="progress" :value="scrollPercentage" max="100" />
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
