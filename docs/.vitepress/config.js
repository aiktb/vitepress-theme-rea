import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    title: "aiktb",
    description: "Aiktb's Blog",
    cleanUrls: true,
    themeConfig: {
        logo: "/logo.png",
        darkMode: false,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about.md'},
            {text: 'Archive', link: '/archive'},
            {text: 'Collection', link: '/collection'},
            {text: 'ACG', link: '/acg'},
        ],

        head: [
            ['link', {rel: 'icon', href: '/favicon.ico'}]
        ],

        footer: {
            message: 'All articles on this website are licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target = "_blank" >CC BY 4.0</a>.',
            copyright: 'Copyright © 2023 aiktb. Powered by <a href="https://vitepress.dev/" target = "_blank" >VitePress</a>.',
        }
    },

})
