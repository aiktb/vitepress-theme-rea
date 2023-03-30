import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "aiktb",
    description: "Aiktb's Blog",
    cleanUrls: true,
    themeConfig: {
        logo: "/logo.png",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Archive', link: '/archive'},
            {text: 'Collection', link: '/collection'},
            {text: 'ACG', link: '/acg'},
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/aiktb' },
            { icon: 'twitter', link: 'https://twitter.com/aiktb39' },
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>telegram</title><path d="/telegram_logo.svg"/></svg>'
                },
                link: 'https://t.me/aiktb'
            }
        ],

        head: [
            ['link', {rel: 'icon', href: '/favicon.ico'}]
        ],

        footer: {
            message: 'All articles on this website are licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target = "_blank" >CC BY 4.0</a>.',
            copyright: 'Copyright © 2023 aiktb. Powered by <a href="https://vitepress.dev/" target = "_blank" >VitePress</a>.',
        }
    }
})
