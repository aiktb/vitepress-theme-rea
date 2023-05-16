import path from 'path'
import {writeFileSync} from 'fs'
import {Feed} from 'feed'
import {type ContentData, createContentLoader, type SiteConfig} from 'vitepress'

const baseUrl: string = `https://aiktb.com`
type RssGenerator = (config: SiteConfig) => Promise<void>;
export const rss: RssGenerator = async (config: SiteConfig): Promise<void> => {
    const feed: Feed = new Feed({
        title: `aiktb's blog`,
        description: 'My Personal Blog',
        id: baseUrl,
        link: baseUrl,
        language: 'zh-CN',
        image: `${baseUrl}/avatar.jpg`,
        favicon: `${baseUrl}/avatar.jpg`,
        copyright: 'Copyright (c) 2023 aiktb'
    })

    const posts: ContentData[] = await createContentLoader('posts/*.md', {
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
