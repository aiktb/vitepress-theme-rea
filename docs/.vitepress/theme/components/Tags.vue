<script setup>
import {useData} from 'vitepress'

const {frontmatter} = useData()
</script>

<template>
  <div class="code-container">
    <code v-for="tag in frontmatter.tags">
      {{ tag }}
    </code>
  </div>
</template>

<style scoped>
.code-container{
  display: flex;
  flex-wrap: wrap;
}
.code-container code {
  border: solid 1pt var(--my-blue);
  white-space: nowrap;
  border-radius: 10px;
  padding: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
