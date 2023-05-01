<script setup>
import {data} from '../posts.data.js'

const posts = data.map((post, index) => ({
  id: index + 1,
  title: post.frontmatter.title,
  date: post.frontmatter.date,
  url: post.url
}))

const years = Array.from(new Set(posts.map(post =>
    post.date.substring(0, 4))))

function monthsByYear(year) {
  return Array.from(new Set(posts.filter(post =>
      post.date.startsWith(year)).map(post =>
      post.date.substring(5, 7))))
}

function postsByYearMonth(year, month) {
  return posts.filter(post => post.date.startsWith(`${year}-${month}`))
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const options = {
    day: '2-digit'
  }

  return date.toLocaleDateString('en-US', options)
}
</script>

<template>
  <div>
    <ul>
      <li v-for="year in years" :key="year" class="year">
        <h2>{{ year }}</h2>
        <ul>
          <li v-for="(month) in monthsByYear(year)" :key="month" class="month">
            <h3>{{ monthNames[parseInt(month) - 1] }}</h3>
            <ul>
              <li v-for="post in postsByYearMonth(year, month)" :key="post.id" class="blog-item">
                <a :href="post.url">
                  <div class="blog-header">
                    <div class="blog-title">{{ post.title }}</div>
                    <div class="blog-date">{{ formatDate(post.date) }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-header {
  display: flex;
  align-items: center;
}

.blog-item {
  position: relative;
}

.blog-header::before {
  content: "●";
  color: var(--my-white);
  flex-wrap: wrap;
}

.blog-title {
  font-size: 1.0em;
  padding-left: 10px;

}

.blog-date {
  position: absolute;
  bottom: 0;
  right: 0;
}

.year, .month, .blog-item {
  list-style-type: none;
}

.month > h3 {
  margin: 0;
}

ul {
  padding-left: 0;
}
</style>
