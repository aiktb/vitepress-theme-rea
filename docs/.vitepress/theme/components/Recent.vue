<script setup>
import {data as posts} from '../posts.data.js'
</script>

<template>
  <div class="recent">
    <h1 class="recent-title"><i>Recent Blogs</i></h1>
    <ul class="blog-list">
      <li v-for="(post, index) in posts" :key="index" class="blog">
        <div class="description">
          <a :href="post.url" class="home-link">{{ post.frontmatter.title }}</a>
          <p>{{ post.frontmatter.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
.recent-title {
  text-align: center;
  margin: 1em 0;
  font-size: 1.5em;
  font-family: "UD Digi Kyokasho NK-B", emoji;
  color: var(--my-blue-lightest)
}

.blog-list {
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blog {
  width: 85%;
  display: block;
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
  max-width: 600px;
  box-shadow: 6px 6px var(--my-white);
  border: 4px solid var(--my-blue-lightest);
  cursor: pointer;
}

.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--my-blue-lightest);
  border: 4px solid var(--my-white);
}
.blog:hover .home-link{
  color: var(--my-blue-lightest);
}
.home-link {
  color: var(--my-white);
}
</style>
