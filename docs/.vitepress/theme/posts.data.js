// posts.data.js
import {createContentLoader} from 'vitepress'

export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).filter((word, index) => index < 9)
    }
})
