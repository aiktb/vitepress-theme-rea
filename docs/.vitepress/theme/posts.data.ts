import {createContentLoader} from 'vitepress';

export interface Post {
    title: string
    url: string
    date: string
}

declare const data: Post[]
export {data}

export default createContentLoader('posts/*.md', {
    transform: (rawData) => {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map(post => {
            return {
                title: post.frontmatter.title,
                url: post.url,
                date: formatDate(post.frontmatter.date)
            }
        })
    }
})

function formatDate(raw: string): Post['date'] {
    const date = new Date(raw)
    date.setUTCHours(12)
    return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    )
}
