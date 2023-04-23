---
title: 'Nginx Proxy Manager实现HTTPS反向代理排疑'
date: '2023/4/7'
tags:
  - 'Nginx'
  - 'Config'
  - 'Reverse Proxy'
---

# Nginx Proxy Manager实现HTTPS反向代理排疑

![- Nginx Proxy Manager -](https://s2.loli.net/2023/04/21/EhFNCoYxqg5mHU7.webp)

## Nginx Proxy Manager介绍以及安装

> 本文使用Ubuntu22.04LTS Server

### 介绍

[Nginx Proxy Manager](https://nginxproxymanager.com/)是由[jc21](https://github.com/jc21)开发的一款使用Web管理Nginx反向代理的工具，其开发理念是"It had to be so easy that a monkey could do it"，相比较传统的Nginx反向代理配置，真的简单太多，普通的反向代理我们只要动动鼠标就ok了，SSL证书的申请也很简单，还会自动为证书申请续期，比用[Certbot](https://certbot.eff.org/)脚本申请还简单！

### 安装

如果你还没有安装docker，我推荐参照[Docker Documentation](https://docs.docker.com/engine/install/ubuntu/)的文档使用apt包管理器下载。

```bash
# -p 创建多级目录
mkdir -p ~/Docker/npm 
cd ~/Docker/npm
# 打开nano编辑器，如果没有安装使用sudo apt install nano
nano docker-compose.yml 
```

按照文档将以下代码使用`Ctrl+Shift+V`粘贴到打开的nano编辑器中，键盘敲击`Ctrl+X`，nano编辑器底部显示`Save modified buffer?  `时敲击`Y`键+`Enter`回车键保存文件。

```yaml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81' # Nginx Proxy Manager在本机的映射端口
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt # SSL证书挂载目录
```

然后使用命令`docker compose -d up`让Nginx Proxy Manager服务在后台运行。

```bash
# 当前运行目录应该在~/Docker/npm
docker compose -d up
# 查看Docker Container运行情况，有输出即为正常
docker container ls | grep nginx-proxy-manager 
# 检查Nginx Proxy Manager是否正常运行监听81端口，输出含有0.0.0.0:81即为正常
ss -ltn | grep 81
```

### 检查防火墙UFW

默认的Ubuntu22.04系统是没有开启UFW防火墙的，如果你开启了UFW防火墙，那么应该开放Docker使用的所有端口，如上述Nginx Proxy Manager使用的80、81、443端口，否则你的服务将不能从外网正常访问。

```bash
sudo ufw status numbered
# 输出Status: active即为开启了UFW，以下命令开放本机端口到外网
sudo ufw allow 80 comment 'HTTP Server'
sudo ufw allow 443 comment 'HTTPS Server'
sudo ufw allow 81 comment 'Nginx Proxy Manager'
```

## 通过Web管理反向代理和SSL证书

### 登录

如果你和主机位于同一个局域网可以使用`http://127.0.0.1:81`访问Web面板，否则只能使用`http://host_ip:81 `(host_ip由你的VPS供应商提供)去访问Web面板。

根据Nginx Proxy Manager的文档，使用默认邮箱`admin@example.com`和默认密码`changeme`登录：

![image-20230421115821193](https://s2.loli.net/2023/04/21/sQGzlq4JhtRY8fH.webp)

### 添加SSL证书

登录之后修改密码的提示会弹窗，你可以立刻修改密码，但要注意此时的连接是HTTP，密码明文传输在公网并不安全，建议开启HTTPS后再修改密码。

1. 主页选中`SSL Certificates`页面，选择`Add SSL Certificates`；
2. 添加申请的SSL证书对应的域名，我这里使用一个泛域名证书`*.aiktb.com`和单域名证书`aiktb.com`，这样以后只要做好DNS解析所有的域名都可以只用这一张证书；
3. 配置DNS Challenge用于证书申请，CA机构通过DNS Challenge来验证你是否是这个域名的所有者，我使用Cloudflare按照官网的要求[获取API Token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)，然后填入对应的位置；
4. Propagation Seconds不要填写即为使用默认值，选中同意Let's Encrypt的政策，点击`Save`即可完成证书申请。



![image-20230421115854256](https://s2.loli.net/2023/04/21/XmRvQ4qsag3Kb5f.webp)

![image-20230421115937506](https://s2.loli.net/2023/04/21/uDJ2ZLIKsqb4RwN.webp)

到这一步就完成SSL证书的申请了，接下来反向代理第一个应用：Nginx Proxy Manager。

## 反向代理Nginx Proxy Manager

### 开放防火墙端口

开启了UFW的在反向代理时必须要开放需要代理的端口对应的防火墙端口(同时也是Docker映射的端口)，Nginx Proxy Manager使用81端口，其他的服务设置为对对应的端口即可。

```bash
sudo ufw allow 81 comment 'Nginx Proxy Manager'
```

### 添加DNS解析

按照域名提供商的对应方法添加一条DNS解析用于反向代理服务，这里我新增一条`npm.aiktb.com`的DNS解析即可。

### 实际配置

点击主页右上角的`Add Proxy Host`，填写对应的主机静态IP和端口：

![image-20230421120002263](https://s2.loli.net/2023/04/21/4O3A9Whz5alrNFV.webp)

注意Schema是根据你代理的服务是否实际开启了HTTPS来设置的：

1. 使用HTTP的服务选择`HTTPS Schema`会导致`502 Bad Gateway`，这是Nginx Proxy Manager的一个最常见错误设置；
2. 一般将客户端到服务器的路径进行TLS加密就足够了，没有必要再为单独的服务开启TLS加密；
3. 使用Docker的服务开启TLS加密需要在容器中单独申请证书或者用文件挂载将证书映射到容器内，操作繁琐，不建议使用。

另外，不可以填写`127.0.0.1`作为除Nginx Proxy Manager以外其他服务的`Forward Hostname/IP`，Docker处于一个独立的网络环境，默认配置的桥接网络是无法通过`127.0.0.1`访问到运行在其他Docker网络环境的服务的。

解释一下3个选项的作用，不关心的话全部启用就好。

1. Cache Assets：开启服务器缓存，提高访问速度；
2. Block Common Exploits：阻止常见的漏洞利用，提高安全性；
3. Websockets Support： 开启Websocket支持，可以参考[Nginx官方的解释](https://www.nginx.com/blog/websocket-nginx/)。

选中右上角的SSL，一目了然，添加刚刚自动申请的证书：

![image-20230421120037388](https://s2.loli.net/2023/04/21/KpUh6q1Oy8BwXtW.webp)

SSL相关的配置都是安全相关的，不关心的话全部启用就好。

1. Force SSL：强制开启SSL加密，HTTP重定向到HTTPS；
2. HTTP/2 Support：使用更安全的HTTP2协议；
3. HSTS Enabled：参考Cloudflare的[这篇文章](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/)。
4. HSTS Subdomains：为子域名开启HSTS。

点击Save，这样就完成Nginx Proxy Manager反向代理的全部配置，在浏览器使用`https://domain`就能访问到对应的服务了。

>当前已开启HTTPS连接，建议使用[1password](https://1password.com/password-generator/)更换一个16位以上大小写字母+符号的强力随机密码。
>

>可以关闭防火墙81端口阻断Nginx Proxy Manager的Web UI，系统管理的应用不适合长时间暴露在公网。

## 域名重定向

假如你想要将`www.aiktb.com`重定向到`aiktb.com`，那么你应该将`HTTP CODE`设置为`308 Permanent Redirect`，并设置SSL，否则网页将无法打开：

![image-20230421211728979](https://s2.loli.net/2023/04/21/ZzfLP8Crx7so52y.webp)

## 常见错误排除

1. 检查防火墙配置，端口一定要开放；
2. 远程进不了Web面板别忘了开启代理，有可能是GFW的干扰；
3. HTTP的服务选中HTTPS Schema，会导致`502 Bad Gateway`；
4. 页面异常有可能是浏览器缓存导致，清理浏览器的缓存再尝试；
5. 纯IPv6未测试过，有可能导致问题。
