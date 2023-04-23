<script setup>
import {data as posts} from '../posts.data.js'
</script>

<template>
  <div class="recent">
    <h1 class="recent-title"><i>Recent Blogs </i></h1>
    <ul class="blog-list">
      <a v-for="post in posts" class="blog" :key="post.id" :href="post.url">
        <h1 class="blog-title">{{ post.frontmatter.title }}</h1>
        <p>{{ post.frontmatter.date }}</p>
        <svg role="img" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="article-icon">
          <title>article</title>
          <use xlink:href="/article.svg#article"/>
        </svg>
      </a>
    </ul>
  </div>
</template>

<style>
.recent-title {
  text-align: center;
  margin: 1em 0;
  font-size: 1.5em;
  font-family: "UD Digi Kyokasho NK-B", serif;
  color: var(--my-blue-lightest)
}

.blog-list {
  font-family: "Segoe UI Emoji", YouYuan, serif;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blog {
  position: relative;
  width: 85%;
  display: block;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
  max-width: 600px;
  box-shadow: 6px 6px var(--my-blue-lightest);
  border: 4px solid var(--my-white);
  cursor: pointer;
  color: var(--my-white);
}

.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--my-blue-lightest);
  border: 4px solid var(--my-blue-lightest);
}

.blog:hover h1 {
  color: var(--my-blue-lightest);
}

.article-icon {
  height: 48px;
  width: auto;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
