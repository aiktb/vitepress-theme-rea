<script setup lang="ts">
import {computed, ref} from 'vue'
import {data} from '../posts.data'

const posts = data.map(post => {
  return {
    url: post.url,
    title: post.title,
    date: post.date
  }
})
const isEmpty = posts.length === 0
const pageSize = 5
const pageTotal = Math.ceil(posts.length / pageSize)
const pageNumber = ref(1)

const hasNextPage = computed(() => {
  return pageNumber.value < pageTotal
})

const hasPrevPage = computed(() => {
  return pageNumber.value > 1
})

const pagePosts = computed(() => {
  const start = (pageNumber.value - 1) * pageSize
  const end = Math.min(pageNumber.value * pageSize, posts.length)
  return posts.slice(start, end)
})
</script>

<template>
  <div class="page">
    <p class="recent">Recent Blogs</p>
    <div v-if="isEmpty" class="empty">
      <p>Sorry, no blogs yet.</p>
    </div>
    <div v-else class="blogs">
      <a v-for="(post, index) of pagePosts" :key="index" :href="post.url" class="blog">
        <p class="title">{{ post.title }}</p>
        <p>{{ post.date }}</p>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="article">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M51,54H15a4,4,0,0,1-4-4V15a4,4,0,0,1,4-4H43a4,4,0,0,1,4,4V50a4,4,0,0,0,4,4h0a4,4,0,0,0,4-4V28a4,4,0,0,0-4-4H47"/>
          <rect width="22" height="7" x="18" y="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line x1="18" x2="39" y1="33" y2="33" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line x1="18" x2="39" y1="38" y2="38" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <line x1="18" x2="31" y1="43" y2="43" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </a>
      <div class="pagination">
        <span class="left-button">
          <button @click="pageNumber = 1" v-show="hasPrevPage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path
                  d="M453-241 213-481l240-240 42 42-198 198 198 198-42 42Zm253 0L466-481l240-240 42 42-198 198 198 198-42 42Z"/>
            </svg>
          </button>
          <button @click="pageNumber--" v-show="hasPrevPage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/>
            </svg>
          </button>
        </span>
        <span class="page-number">
          {{ pageNumber }}/{{ pageTotal }}
        </span>
        <span class="right-button">
          <button @click="pageNumber++" v-show="hasNextPage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
            </svg>
          </button>
          <button @click="pageNumber = pageTotal" v-show="hasNextPage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path
                  d="m255-241-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2em;
}

.empty {
  border-bottom: 2px solid var(--my-blue-light);
  font-size: 1.5em;
}

.recent {
  padding-bottom: 20px;
  font-size: 1.5em;
  color: var(--my-blue-light)
}

.blogs {
  position: relative;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog {
  position: relative;
  flex-grow: 1;
  box-shadow: 6px 6px var(--my-blue);
  border: 4px solid var(--my-blue-light);
  border-radius: 20px;
  margin: 10px;
  width: 85vw;
  max-width: 600px;
  padding: 10px 40px 10px 10px;
}

.icon {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 48px;
  width: auto;
  fill: none;
  stroke: var(--my-white);
}

.blog:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--my-blue);
}

.blog:hover .icon,
.blog:hover .title {
  stroke: var(--my-blue-light);
  color: var(--my-blue-light);
}

.left-button {
  position: absolute;
  left: 20px;
}

.right-button {
  position: absolute;
  right: 20px;
}

.pagination {
  padding-top: 20px;
  border-bottom: 2px solid var(--my-blue-light);
  width: 85vw;
  max-width: 600px;
  text-align: center;
}

.page-number {
  line-height: 30px
}

.pagination button {
  box-shadow: 2px 2px var(--my-blue);
  border: 2px solid var(--my-blue-light);
  border-radius: 4px;
  width: 20px;
  height: 20px;
  fill: var(--my-white);
  margin: 0 5px;
}

.pagination button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px var(--my-blue);
  fill: var(--my-blue-light)
}
</style>
