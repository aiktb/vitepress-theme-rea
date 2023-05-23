<script setup>
import {useData} from 'vitepress'

const {title} = useData()
</script>

<template>
  <div class="comments">
    <component
        :is="'script'"
        :key="title"
        src="https://giscus.app/client.js"
        data-repo="aiktb/rea"
        data-repo-id="R_kgDOJQkw9Q"
        data-category="General"
        data-category-id="DIC_kwDOJQkw9c4CVeXb"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-lang="en"
        data-theme="transparent_dark"
        data-loading="eager"
    />
  </div>
</template>
