import * as path from 'path'
import {writeFileSync} from 'fs'
import {Feed} from 'feed'
import {type ContentData, createContentLoader, type SiteConfig} from 'vitepress'

const id: string = 'aiktb'
const baseUrl: string = `https://${id}.com`
type RssGenerator = (config: SiteConfig) => Promise<void>
export const rss: RssGenerator = async (config) => {
    const feed: Feed = new Feed({
        title: `${id}'s blog`,
        description: 'My Personal Blog',
        id: baseUrl,
        link: baseUrl,
        language: 'zh-CN',
        image: `${baseUrl}/avatar.jpg`,
        favicon: `${baseUrl}/favicon.svg`,
        copyright: `Copyright (c) 2023 ${id}`
    })

    const posts: ContentData[] = await createContentLoader('posts/*.md', {
        excerpt: true,
        render: true,
        transform: (rawData) => {
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
            author: [{name: `${id}`}],
            date: frontmatter.date
        })
    }

    writeFileSync(path.join(config.outDir, 'rss.xml'), feed.rss2())
}
