<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Avatar from './Avatar.vue'
import Comments from './Comments.vue'
import Hero from './Hero.vue'
import Page from './Page.vue'
import Progress from './Progress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-top>
      <Progress />
    </template>
    <template #doc-after>
      <Comments />
    </template>
    <template #aside-outline-before>
      <Avatar />
    </template>
    <template #home-hero-before>
      <Hero />
    </template>
    <template #home-hero-after>
      <Page />
    </template>
  </Layout>
</template>
