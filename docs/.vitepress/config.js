// .vitepress/config.js
import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    title: "aiktb",
    description: "Aiktb's Blog",
    lastUpdated: true,
    cleanUrls: true,
    appearance: false,
    head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-MCQSMRVDJN'}],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-MCQSMRVDJN');"
        ],
        [
            'link',
            {rel: 'icon', href: '/favicon.svg',}
        ]
    ],
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: false,
        outline: [2, 3],
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Archive', link: '/archive'},
            {text: 'Links', link: '/links'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/aiktb/rea'},
        ],
        footer: {
            message: 'The blog posts are all licensed under ' +
                '<a href="https://creativecommons.org/licenses/by/4.0/" target = "_blank" >CC BY 4.0</a>.',
            copyright: 'Copyright © 2023 <a href="/">aiktb</a>. Released under the ' +
                '<a href="https://github.com/aiktb/rea/blob/master/LICENSE" target = "_blank">MIT License</a>.'
        },
    },
})
