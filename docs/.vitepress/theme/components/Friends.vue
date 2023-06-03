<script setup lang="ts">
import {VPTeamMembers} from 'vitepress/theme'
import email from '/email.svg?raw'
import telegram from '/telegram.svg?raw'
import link from '/link.svg?raw'

const members = [
  {
    avatar: '/avatar.jpg',
    name: 'aiktb',
    title: 'Tester',
    links: [
      {
        icon: {svg: link},
        link: 'https://aiktb.com/'
      },
      {icon: 'github', link: 'https://github.com/aiktb'},
      {
        icon: {svg: telegram},
        link: 'https://t.me/aiktb'
      },
      {
        icon: {svg: email},
        link: 'mailto:aiktb@outlook.com'
      }
    ]
  },
  {
    avatar: 'https://blognas.hwb0307.com/logo.jpg',
    name: 'bensz',
    title: 'VPS Blogger',
    links: [
      {
        icon: {svg: link},
        link: 'https://blognas.hwb0307.com/'
      },
      {
        icon: {svg: telegram},
        link: 'https://t.me/benszconan'
      },
      {icon: "github", link: 'https://github.com/huangwb8'},
    ]
  },
]
</script>

<template>
  <VPTeamMembers size="small" :members="members"/>
</template>
