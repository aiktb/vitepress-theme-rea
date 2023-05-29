<script setup>
import DefaultTheme from 'vitepress/theme'
import Member from "./Avatar.vue"
import Comments from "./Comments.vue"
import Hero from "./Hero.vue"
import Page from "./Page.vue"

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
      <Hero/>
    </template>
    <template #home-hero-after>
      <Page/>
    </template>
  </Layout>
</template>
