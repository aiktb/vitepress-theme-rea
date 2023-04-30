<!--suppress ALL -->
<script setup>
import {VPTeamMembers} from 'vitepress/theme'
import email from '/email.svg?raw'
import telegram from '/telegram.svg?raw'

const members = [
  {
    avatar: 'https://s.gravatar.com/avatar/646885b88df05b60e1eb4f3d5767c2e2?s=200',
    name: 'aiktb',
    title: 'Blogger',
    links: [
      {icon: 'github', link: 'https://github.com/aiktb'},
      {icon: 'twitter', link: 'https://twitter.com/aiktb39'},
      {
        icon: {svg: telegram},
        link: 'https://t.me/aiktb'
      },
      {
        icon: {svg: email},
        link: 'mailto:aiktb@outlook.com'
      }
    ]
  }
]
</script>

<template>
  <VPTeamMembers size="small" :members="members"/>
</template>
