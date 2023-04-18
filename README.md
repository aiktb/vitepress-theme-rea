# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension, the comment system uses [giscus](https://github.com/giscus/giscus).

Giscus found that there is a bug that cannot be displayed. It is known that the display effect of gitalk is good, and it is considering replacing it.

CSS is basically gibberish, don't read it, maybe refactor this part of the code later.

## Deploy

```bash
mkdir -p ~/Docker/rea
cd ~/Docker/rea
wget https://github.com/aiktb/rea/blob/master/docker-compose.yml
docker compose up -d
```

## License

The code uses the [MIT](https://github.com/aiktb/rea/blob/master/LICENSE) license, and the blog post uses the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Preview

### Home

![image-20230409192250862](https://image.aiktb.com/images/2023/04/09/202304091922114.png)

### About

![image-20230409192305335](https://image.aiktb.com/images/2023/04/09/202304091923450.png)

### Links

![image-20230409192320398](https://image.aiktb.com/images/2023/04/09/202304091923508.png)