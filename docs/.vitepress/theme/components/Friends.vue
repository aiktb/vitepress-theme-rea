<!--suppress ALL -->
<script setup>
import {VPTeamMembers} from 'vitepress/theme'
import email from '/email.svg?raw'
import telegram from '/telegram.svg?raw'
import blogger from '/blogger.svg?raw'

const members = [
  {
    avatar: '/avatar.jpg',
    name: 'aiktb',
    title: 'Tester',
    links: [
      {
        icon: {svg: blogger},
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
    title: 'Blogger',
    links: [
      {
        icon: {svg: blogger},
        link: 'https://blognas.hwb0307.com/'
      },
      {
        icon: {svg: telegram},
        link: 'https://t.me/benszconan'
      },
    ]
  },
]
</script>

<template>
  <VPTeamMembers size="small" :members="members"/>
</template>
