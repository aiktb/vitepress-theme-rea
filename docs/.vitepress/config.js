// .vitepress/config.js
import {defineConfig} from 'vitepress';
import {rss} from './theme/rss.js'

export default defineConfig({
    lang: "zh-CN",
    title: "aiktb",
    description: "Aiktb's Blog",
    lastUpdated: true,
    cleanUrls: true,
    appearance: false,
    markdown: {
        lineNumbers: true,
    },
    head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-MCQSMRVDJN'}],
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
            {rel: 'icon', href: '/image/favicon.svg',}
        ],
    ],
    themeConfig: {
        logo: "/image/logo.svg",
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
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Archive', link: '/archive'},
            {text: 'Links', link: '/links'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/aiktb/rea'},
            {
                icon: {
                    svg: `<svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title>RSS</title>
                            <use xlink:href="/image/rss.svg#rss"/>
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
    buildEnd: rss
})
