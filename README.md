# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension.

## Feature

- Simple tones
- Dark mode only
- Recent blogs
- No sidebar
- [Comment](https://github.com/giscus/giscus)
- [Local search](https://github.com/emersonbottero/vitepress-plugin-search)

## Deploy

Default port: 8083

### CLI

#### Start

```bash
git clone https://github.com/aiktb/rea.git
cd rea
npm install
tmux new-session -d 'npm run docs:deploy'
```

#### Stop

```bash
tmux kill-session -t 0
```

### Docker

#### Start

```bash
wget https://github.com/aiktb/rea/blob/master/docker-compose.yml
docker compose up -d
```

#### stop

```
docker compose stop
```



## License

The code uses the [MIT](https://github.com/aiktb/rea/blob/master/LICENSE) license, and the blog post uses the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Preview

### Home

![image-20230423185114307](https://s2.loli.net/2023/04/23/d4NTRDUwWQih6cE.webp)

### About

![image-20230423185126228](https://s2.loli.net/2023/04/23/Bdt8hrs6cIRCl3E.webp)

### Links

![](https://s2.loli.net/2023/04/23/kXO8fFJdPWUZIT7.webp)