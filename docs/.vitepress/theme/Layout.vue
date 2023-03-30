<script setup>
import DefaultTheme from 'vitepress/theme'
import {VPTeamMembers} from 'vitepress/theme'
import Giscus from '@giscus/vue'

const {Layout} = DefaultTheme
const members = [
  {
    avatar: '/favicon.svg',
    name: 'aiktb',
    title: 'Blogger',
    links: [
      {icon: 'github', link: 'https://github.com/aiktb'},
      {
        // Don't try to use paths to reference SVG icons, it's very cumbersome here,
        // and doesn't accommodate light and dark theme switching!
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"></path></svg>'
        },
        link: 'https://t.me/aiktb'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></path></svg>'
        },
        link: 'mailto:aiktb@outlook.com?subject=Email%20Subject&body=Email%20Body'
      }
    ]
  }
]
</script>

<template>
  <Layout>
    <progress/>
    <template #aside-outline-before>
      <VPTeamMembers size="small" :members="members"/>
    </template>
    <template #doc-after>
      <clientonly>
        <div class="comments">
          <Giscus
              repo="aiktb/rea"
              repo-id="R_kgDOJQkw9Q"
              category="Announcements"
              category-id="DIC_kwDOJQkw9c4CVeXb"
              mapping="pathname"
              strict="0"
              reactions-enabled="1"
              emit-metadata="0"
              input-position="bottom"
              lang="en"
              theme="transparent_dark"
          />
        </div>
      </clientonly>
    </template>
  </Layout>
</template>
