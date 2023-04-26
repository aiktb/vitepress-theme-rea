import path from 'path'
import {writeFileSync} from 'fs'
import {Feed} from 'feed'
import {createContentLoader} from 'vitepress'

const baseUrl = `https://aiktb.com`

export async function rss(config) {
    const feed = new Feed({
        title: `aiktb's blog`,
        description: 'My Personal Blog',
        id: baseUrl,
        link: baseUrl,
        language: 'zh-CN',
        image: 'https://s.gravatar.com/avatar/646885b88df05b60e1eb4f3d5767c2e2?s=200',
        favicon: `${baseUrl}/favicon.svg`,
        copyright: 'Copyright (c) 2023 aiktb'
    })

    const posts = await createContentLoader('posts/*.md', {
        excerpt: true,
        render: true,
        transform(rawData) {
            return rawData.sort((a, b) => {
                return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
            })
        }
    }).load()

    for (const {url, excerpt, frontmatter, html} of posts) {
        feed.addItem({
            title: frontmatter.title,
            id: `${baseUrl}${url}`,
            link: `${baseUrl}${url}`,
            description: excerpt,
            content: html,
            author: [{name: 'aiktb'}],
            date: frontmatter.date
        })
    }

    writeFileSync(path.join(config.outDir, 'rss.xml'), feed.rss2())
}
