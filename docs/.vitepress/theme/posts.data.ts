import {createContentLoader} from 'vitepress';

export default createContentLoader('posts/*.md', {
    transform: (rawData) => {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map(post => {
            const {frontmatter, ...rest} = post
            const date: string = new Date(frontmatter.date).toISOString().slice(0, 10)
            return {
                ...rest,
                frontmatter: {
                    ...frontmatter,
                    date: date
                }
            }
        })
    }
})
