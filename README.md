# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension.

Q: How to develop?

A: Read this [blog](https://aiktb.com/posts/vitepress-blog)(Chinese).

## Feature

- Simple tones
- Dark mode only
- Recent blogs
- Google Analytics support
- RSS feed
- Local search
- GitHub Action
- Comments

## Deploy

#### Start

```bash
# Default port: 8080
git clone https://github.com/aiktb/rea.git
cd rea
npm install
tmux new-session -d 'npm run docs:build && npm run docs:preview'
```

#### Stop

```bash
tmux kill-session -t 0
```

## License

The code uses the [MIT](https://github.com/aiktb/rea/blob/master/LICENSE) license, and the blog post uses the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Preview

### Home

![home](https://s2.loli.net/2023/05/17/cyqreZ9uBmgiUfE.webp)

### About

![about](https://s2.loli.net/2023/05/17/jJXMPVtEk4e3qQf.webp)
