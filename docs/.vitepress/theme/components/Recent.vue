<script setup>
import {data as posts} from '../posts.data.js'
</script>

<template>
  <div class="pagination">
    <ul>
      <li v-for="(post, index) in posts" :key="index" class="blog">
        <div class="description">
          <a :href="post.url" class="link">{{ post.frontmatter.title }}</a>
          <p>{{ post.frontmatter.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>

</style>
