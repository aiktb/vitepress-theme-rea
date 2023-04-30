// .vitepress/config.js
import {defineConfig} from 'vitepress';
import {rss} from './theme/rss.js'

export default defineConfig({
    lang: "zh-CN",
    title: "aiktb",
    description: `aiktb's blog`,
    lastUpdated: true,
    cleanUrls: true,
    appearance: false,
    markdown: {
        lineNumbers: true,
    },
    buildEnd: rss,
    head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-MCQSMRVDJN'}
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCQSMRVDJN');`
        ],
        [
            'link',
            {rel: 'icon', href: '/favicon.svg',}
        ],
        [
            'link',
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'}
        ],
        [
            'link',
            {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: ''},
        ],
        [
            'link',
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
        ],
    ],
    themeConfig: {
        logo: "/favicon.svg",
        siteTitle: `aiktb's blog`,
        outline: [2, 3],
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/aiktb/rea/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {text: '✨Home', link: '/'},
            {text: '✨About', link: '/about'},
            {text: '✨Archive', link: '/archive'},
            {text: '✨Links', link: '/links'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/aiktb/rea'},
            {
                icon: {
                    svg: `<svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title>RSS</title>
                            <use xlink:href="/rss.svg#rss"/>
                          </svg>`
                },
                link: '/rss.xml'
            },
        ],
        footer: {
            message: `<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> | 
                      <a href="https://github.com/aiktb/rea/blob/master/LICENSE" target="_blank">MIT License</a> | 
                      Copyright © 2023 <a href="/">aiktb</a>`,
        },
    },
})
