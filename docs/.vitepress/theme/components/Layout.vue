<script setup>
import DefaultTheme from 'vitepress/theme';
import Member from "./Member.vue";
import Comments from "./Comments.vue";
import Tags from "./Tags.vue";
import Home from "./Home.vue";

const {Layout} = DefaultTheme
</script>
<template>
  <Layout>
    <template #doc-before>
      <Tags/>
    </template>
    <template #doc-after>
      <Comments/>
    </template>
    <template #aside-outline-before>
      <Member/>
    </template>
    <template #home-hero-before>
      <Home/>
    </template>
  </Layout>
</template>
