<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import email from '/email.svg?raw'
import telegram from '/telegram.svg?raw'

const members = [
  {
    avatar: '/avatar.jpg',
    name: 'aiktb',
    title: 'Blogger',
    links: [
      { icon: 'github', link: 'https://github.com/aiktb' },
      { icon: 'twitter', link: 'https://twitter.com/aiktb39' },
      {
        icon: { svg: telegram },
        link: 'https://t.me/aiktb'
      },
      {
        icon: { svg: email },
        link: 'mailto:aiktb@outlook.com'
      }
    ]
  }
]
</script>

<template>
  <VPTeamMembers size="small" :members="members" />
</template>
