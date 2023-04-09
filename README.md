# rea

## Description

My blog URL: https://aiktb.com

Personal blog based on [VitePress](https://vitepress.dev/) default theme extension, the comment system uses [giscus](https://github.com/giscus/giscus).

Giscus found that there is a bug that cannot be displayed. It is known that the display effect of gitalk is good, and it is considering replacing it.

CSS is basically gibberish, don't read it, maybe refactor this part of the code later.

## Deploy

Note: The automatic blog update uses `HEALTHCHECK` in the Dockerfile to execute health-check.sh regularly, and health-check.sh uses git fetch to determine whether the remote branch origin/master has been updated. If so, kill the process corresponding to `npm run docs:preview` , so as to stop the container, and then automatically restart the container for update through the `restart: unless-stopped` set in docker-compose.yml. (The script used by CMD contains `git pull`)

```bash
mkdir -p ~/Docker/rea
cd ~/Docker/rea
nano docker-compose.yml
```

```yaml
# docker-compose.yml
version: '3'
services:
  rea:
    image: aiktb/rea:latest
    restart: unless-stopped
    ports:
      - '8083:8083'
    networks:
      - rea
networks:
  rea:
```

```bash
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