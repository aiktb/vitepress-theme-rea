import { defineConfig } from 'vitepress'
import { rss } from './theme/rss'

export default defineConfig({
  lang: 'zh-CN',
  title: 'aiktb',
  description: `aiktb's blog`,
  lastUpdated: true,
  cleanUrls: true,
  appearance: false,
  markdown: {
    lineNumbers: true
  },
  buildEnd: rss,
  head: [
    ['meta', { name: 'theme-color', content: '#13212e' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-MCQSMRVDJN'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){ dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'G-MCQSMRVDJN');`
    ],
    [
      'style',
      {},
      `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');`
    ],
    [
      'style',
      {},
      `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');`
    ],
    [
      'style',
      {},
      `@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap');`
    ],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://s2.loli.net' }]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: `aiktb's blog`,
    outline: [2, 3],
    search: {
      provider: 'algolia',
      options: {
        appId: 'FYZPLU3GD7',
        apiKey: 'e48f88b8dc4b85ae2d53e4761f435791',
        indexName: 'aiktb'
      }
    },
    editLink: {
      pattern: 'https://github.com/aiktb/vitepress-theme-rea/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: '✨Home', link: '/' },
      { text: '✨About', link: '/about' },
      { text: '✨Using', link: '/using' },
      { text: '✨Links', link: '/links' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiktb/vitepress-theme-rea' },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <title>RSS</title>
                  <use xlink:href="/rss.svg#rss"/>
                </svg>`
        },
        link: '/rss.xml'
      },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>MyAnimeList</title>
                            <use xlink:href="/MAL.svg#MAL"/>
                          </svg>`
        },
        link: 'https://myanimelist.net/animelist/aiktb'
      }
    ],
    footer: {
      message: `Proudly hosted with <a href="https://pages.github.com/">GitHub Pages</a>.`,
      copyright: `<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> | 
                      <a href="https://github.com/aiktb/rea/blob/master/LICENSE" target="_blank">MIT License</a> | 
                      Copyright © 2023 <a href="mailto:aiktb@outlook.com" target="_blank">aiktb</a>.`
    }
  }
})
