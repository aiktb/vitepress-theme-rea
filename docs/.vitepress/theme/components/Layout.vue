<script setup>
import DefaultTheme from 'vitepress/theme'
import Member from "./Avatar.vue"
import Comments from "./Comments.vue"
import Home from "./Hero.vue"
import Recent from "./Recent.vue"

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments/>
    </template>
    <template #aside-outline-before>
      <Member/>
    </template>
    <template #home-hero-before>
      <Home/>
    </template>
    <template #home-hero-after>
      <Recent/>
    </template>
  </Layout>
</template>
