<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div class="comments">
    <component
      :is="'script'"
      :key="title"
      src="https://giscus.app/client.js"
      data-repo="aiktb/vitepress-theme-rea"
      data-repo-id="R_kgDOJQkw9Q"
      data-category="General"
      data-category-id="DIC_kwDOJQkw9c4CVeXc"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="en"
      data-theme="transparent_dark"
      data-loading="lazy"
      async
    />
  </div>
</template>
