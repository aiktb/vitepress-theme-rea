# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension, the comment system uses [giscus](https://github.com/giscus/giscus).

Giscus found that there is a bug that cannot be displayed. It is known that the display effect of gitalk is good, and it is considering replacing it.

CSS is basically gibberish, don't read it, maybe refactor this part of the code later.

## Deploy

Default port: 8083

### NPM

```bash
npm run docs:build
npm run docs:preview
```

### Docker

```bash
mkdir -p ~/Docker/rea
cd ~/Docker/rea
wget https://github.com/aiktb/rea/blob/master/docker-compose.yml
docker compose up -d
```

## License

The code uses the [MIT](https://github.com/aiktb/rea/blob/master/LICENSE) license, and the blog post uses the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Preview

### About

![image-20230419234900162](https://s2.loli.net/2023/04/19/9eRV5Gx3NLgY4dJ.png)

### Links

![image-20230419234919745](https://s2.loli.net/2023/04/19/8jlYhH19TWrqxf6.png)