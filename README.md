# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension.

## Feature

- Simple tones
- Dark mode only
- Recent blogs
- No sidebar
- Google Analytics support
- [Comment](https://github.com/giscus/giscus)
- [Local search](https://github.com/emersonbottero/vitepress-plugin-search)

## Next step

- Let the archive page become like [this](https://keestalkstech.com/archive/).
- RSS feed
- Site map

## Deploy

#### Start

```bash
# Default port: 8083
git clone https://github.com/aiktb/rea.git
cd rea
npm install
tmux new-session -d 'npm run docs:deploy'
```

#### Stop

```bash
tmux kill-session -t 0
```

## License

The code uses the [MIT](https://github.com/aiktb/rea/blob/master/LICENSE) license, and the blog post uses the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Preview

### Home

![image-20230424180412898](https://s2.loli.net/2023/04/24/WDdNABbaeFrXUS7.webp)

### About

![image-20230424180405354](https://s2.loli.net/2023/04/24/QMY2VXi1T4J6pxw.webp)

