<script setup>
import Giscus from '@giscus/vue'
</script>

<template>
  <clientOnly>
    <div class="comments">
      <Giscus
          repo="aiktb/rea"
          repo-id="R_kgDOJQkw9Q"
          category="Announcements"
          category-id="DIC_kwDOJQkw9c4CVeXb"
          mapping="title"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          lang="en"
          theme="transparent_dark"
          loading="lazy"
      />
    </div>
  </clientOnly>
</template>
