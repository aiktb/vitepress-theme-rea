<script setup>
import {VPTeamMembers} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://s.gravatar.com/avatar/646885b88df05b60e1eb4f3d5767c2e2?s=200',
    name: 'aiktb',
    title: 'Blogger',
    links: [
      {icon: 'github', link: 'https://github.com/aiktb'},
      {icon: 'twitter', link: 'https://twitter.com/aiktb39'},
      {
        // Don't try to use paths to reference SVG icons, it's very cumbersome here,
        // and doesn't accommodate light and dark theme switching!
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <title>Telegram</title>
                     <use xlink:href="/telegram.svg#telegram"/>
                </svg>`
        },
        link: 'https://t.me/aiktb'
      },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <title>Email</title>
                     <use xlink:href="/email.svg#email"/>
                </svg>`
        },
        link: 'mailto:aiktb@outlook.com?subject=Email%20Subject&body=Email%20Body'
      }
    ]
  }
]
</script>

<template>
  <VPTeamMembers size="small" :members="members"/>
</template>
