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
            'link',
            {rel: 'icon', href: '/favicon.svg',}
        ]
    ],
    themeConfig: {
        logo: "/logo.svg",
        siteTitle: false,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Archive', link: '/archive'},
            {text: 'Links', link: '/links'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/aiktb/rea'},
        ]

        ,
        footer: {
            message: '<a href="https://github.com/aiktb/rea" target = "_blank">Rea</a> released under the ' +
                '<a href="https://github.com/aiktb/rea/blob/master/LICENSE" target = "_blank">MIT License</a>, ' +
                'and the blog posts are all licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target = "_blank" >CC BY 4.0</a>.',
            copyright: 'Copyright © 2023 <a href="/">aiktb</a>. Powered by <a href="https://vitepress.dev/" target = "_blank" >VitePress</a>.',
        },
    },
})
