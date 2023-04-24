<!--<script setup>-->
<!--import Giscus from '@giscus/vue'-->
<!--import { useData } from 'vitepress'-->

<!--const {title} = useData()-->
<!--</script>-->

<!--<template>-->
<!--  <clientOnly>-->
<!--    <div class="comments" :key="title">-->
<!--      <Giscus-->
<!--          repo="aiktb/rea"-->
<!--          repo-id="R_kgDOJQkw9Q"-->
<!--          category="Announcements"-->
<!--          category-id="DIC_kwDOJQkw9c4CVeXb"-->
<!--          mapping="title"-->
<!--          strict="0"-->
<!--          reactions-enabled="1"-->
<!--          emit-metadata="0"-->
<!--          input-position="bottom"-->
<!--          lang="en"-->
<!--          theme="transparent_dark"-->
<!--          loading="eager"-->
<!--      />-->
<!--    </div>-->
<!--  </clientOnly>-->
<!--</template>-->

<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated } from "vitepress";

function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "a7c38dd127d34e8f43ec",
    clientSecret: "f09b5d1c59719f62d0542dd0e2d5be8e5f468ee5",
    repo: "rea",
    owner: "aiktb",
    admin: ["aiktb"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "en-US",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
