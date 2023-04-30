---
title: 'VitePress利用默认主题拓展开发博客实录'
date: 2023-04-30
---

# VitePress利用默认主题拓展开发博客实录

![cover](https://s2.loli.net/2023/04/30/KQrvZSeBiFujawC.webp)

> 本文使用VitePress v1.0.0-alpha.74，VitePress仍在开发中，请留意更新。

## Before the start

### Goal

这篇博客的目的是给出自定义VitePress博客整套可行的开发方案和注意事项。

这个博客项目参考了许多博客和GitHub仓库，我会使用外链表明参考对象。

如果你觉得我的这篇博客和项目对你有帮助的话，不妨为我的[GitHub](https://github.com/aiktb/rea)点个Star⭐！

### Why use vitepress?

1. 开箱即用，可拓展程度高；
2. 自定义主题所需技术门槛低；
3. 社区活跃，解决方案较多；
4. 单页应用程序加载速度快；
5. 构建速度快，参考这篇[推文](https://twitter.com/rxliuli/status/1578895613847953409)。

### Q&A

Q: 为什么会想到用VitePress构建自定义博客？

A: 想着自己搞个自定义博客，看VUE3的文档时发现了这个项目，查看文档后觉得很适合，于是选用。

Q: 需要掌握哪些技术才能自定义主题？

A: 最基本的CSS、HTML和JavaScript，以及一点点VUE，会用浏览器的`F12`开发者工具。

Q: 有哪些最有价值的文档和社区可以参考？

A: [GitHub Issue](https://github.com/vuejs/vitepress/issues)、[VitePress Docs](https://vitepress.dev/)、[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)以及[GitHub Search](https://github.com/search?q=vitepress%20blog&type=repositories)。

Q: 如何部署/上线博客到公网？

A: 建议使用[GitHub Action](https://docs.github.com/en/actions)和`github.io`的子域名即可，有钱也可以上VPS和自定义域名，这两种方式我都会提到。

### Tool Box

| Name                                              | Features                              |
|---------------------------------------------------|---------------------------------------|
| [WebStorm](https://www.jetbrains.com/webstorm/)   | 提供一系列代码分析和补全的重量级IDE，实测比VSCode适合用来开发博客 |
| [Typora](https://typora.io/)                      | 所见即所得的markdown编辑器，简洁美观，功能齐全           |
| [Canva](https://www.canva.com/)                   | 用于设计博客所用的封面图片，提供云保存、在线编辑和大量免费模板       |
| [IconScout](https://iconscout.com/)               | 搜寻博客需要使用的各种SVG图标，如SocialLink，免费图标就够用  |
| [SM.MS](https://sm.ms/)                           | 免费的在线图床服务，如果不想将图片保存在GitHub Repo的话很有用  |
| [PicGo-APP](https://github.com/Molunerfinn/PicGo) | 和Typora配合实现粘贴图片自动转换为Webp并上传到多种图床      |
| [ChatGPT](https://chat.openai.com/chat)           | 提供各种关于编码的建议，如果你没有太多前端开发经验，那么这很重要      |

## Development

### Start

在WebStorm新建一个空项目，执行以下命令：

```bash
npm install -D vitepress
npx vitepress init
```

填写目录名称时，`docs`是默认名，该目录在GitHub的代码占比分析中会被忽略，参考[这个](https://github.com/github-linguist/linguist/blob/master/docs/overrides.md#documentation)，如果你的Repo Languages显示不正常，应该创建`.gitattributes`在你的项目根目录(最外层)，添加类似行：

```bash
# .gitattributes
docs/** -linguist-documentation
```

这样你的Repo Languages在项目开发完后最终应该类似：

![repo-languages](https://s2.loli.net/2023/04/30/tsWaX5FJBwelh6D.webp)

### config.js

关于这个文件的普通案例在[文档](https://vitepress.dev/reference/site-config)中已经写的比较清晰了，可以参考我的[文件](https://github.com/aiktb/rea/blob/master/docs/.vitepress/config.js)，在这篇博客我只会写文档中没有或者可能需要的内容。

#### sidebar

对于文档而言这是必要的，但对博客而言需要去掉它来节省空间，从`confgi.js`中删除以下行以关闭它：

```js
 sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
```

就在VitePress v1.0.0-alpha.73(写这篇文章的上一个版本)删除`sidebar`会导致移动视图的`on this page`整行消失，issue:[#2258](https://github.com/vuejs/vitepress/issues/2258)是我提的，然后它就在alpha.74被修复了。

#### lineNumbers

这是我唯一使用的markdown配置，且很有用，我查看了许多人的VitePress项目，发现他们都没有开启代码块行号显示选项，我建议你在`config.js`中开启它：

```js
markdown: {
    lineNumbers: true,
},
```

#### dark mode

非常可惜目前的VitePress没有`dark mode only`，他只能将主题锁定在明亮模式并通过以下配置移除主题切换按钮：

```js
appearance: false,
```

我的博客完全是在明亮模式的基础上修改的，为了减少工作量我只愿意开发一套主题，如果VitePress能锁定在dark mode，那将可以大大减少我的工作量。

有一个可以参考的issue:[#1359](https://github.com/vuejs/vitepress/issues/1359)，这也许对你有用。

#### head

除去官网介绍的简单添加favicon功能，head还可以做很多事，[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)中提到的都是可添加项，用类似下面的方法可以将其添加到你的博客或文档中。

比如支持[Google Analytics](https://analytics.google.com/analytics/web/)，参考issue:[#1131](https://github.com/vuejs/vitepress/issues/1131)，就像这样：

```js
head: [
    [
        'script',
        {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-**********'}
    ],
    [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-**********');`
    ],
]
```

比如说你还可以像这样加载[Google Fonts](https://fonts.google.com/)中的`JetBrains Mono`字体，以便在CSS中直接使用它：

```js
head: [
	[
        'link',
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'}
    ],
    [
        'link',
        {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: ''},
    ],
    [
        'link',
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
    ],
]
```

#### buildEnd

这个功能可以在VitePress构建完成后调用特定的JavaScript，很适合用来添加类似RSS feed和Site map(issue:[#520](https://github.com/vuejs/vitepress/issues/520))的功能。

我将在这里用几步教会你为博客生成RSS feed：

1. 运行`npm i -D feed`安装依赖；
2. 建立`/theme/rss.js`文件；
3. 复制粘贴[我的代码](https://github.com/aiktb/rea/blob/master/docs/.vitepress/theme/rss.js)，并修改相应的个人信息；
4. 在`config.js`中加入以下几行代码。

```js
import {rss} from './theme/rss.js'

...
head: [
    buildEnd: js
],
...
```

这个方法基本参考了尤雨溪在`Vue Blog`中编写的[代码](https://github.com/vuejs/blog/blob/main/.vitepress/genFeed.ts)，但他使用了错误的`'feed.rss'`文件名，应该使用`.xml`格式，否则RSS订阅文件将无法被浏览器正确显示。

并且我的方法依赖了每篇文章中开头有如下格式的`frontmatter`，并且博客文章目录名为`posts`，关于`frontmatter`的应用接下来还会详细提到，参考[VitePress Docs](https://vitepress.dev/reference/frontmatter-config#frontmatter-config):

```markdown
---
title: 'VitePress Blog Title'
date: 2023-04-30
---
```

> 注意时间格式很重要，不要修改它，那会导致报错。

#### socialLinks

重要的只有一点：如何引用SVG文件图标为网站添加一个VitePress默认支持以外的图标(比如Telegram、Email)？

图标可以从iconscout找，但VitePress Docs只给出了一种SVG硬编码引用方式，但其实有更好的方法，参考issue:[#2290](https://github.com/vuejs/vitepress/issues/2290)。

在VUE和JavaScript文件你都可以类似使用以下的格式引用，这需要你的`viewBox`设置和原始SVG一致并`xlink:href`引用正确的SVG 文件名和id：

```javascript
themeConfig: {
	socialLinks: [
		{
			icon: {
				svg: `<svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <title>RSS</title>
                        <use xlink:href="/rss.svg#rss"/>
                      </svg>`
            },
            link: '/rss.xml'
        },
    ],
}
```

`public/rss.svg`应该像这样:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="rss">
    <path d=" ... "/>
</svg>
```

#### search

新建立的文档和博客还没有内容来充实它，申请[Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch)有点为难人，不过VitePress就在alpha.66版本加入了`Local Search`功能，可以按照文档的说明简单快捷的启用它，只需要几行代码：

```js
 themeConfig: {
    search: {
      provider: 'local'
    }
  }
```

需要注意的是`Local Search`并不完美，仅仅是“能用”而已，还存在许多问题，特别是中文的处理上表现很糟糕。

以前有`vitepress-plugin-search`插件用于支持本地搜索，我使用过该插件，效果上似乎差距不明显，但在样式上`Local Search`完胜对方，这很能减轻CSS开发工作量。

### Layout

`Layout`组件的`slot`是自定义VitePress博客的要点，因为有了`slot`才使VitePress在默认主题下页面仍有一定可拓展的空间，使用方法在[文档](https://vitepress.dev/guide/extending-default-theme#layout-slots)中已经写明，`Layout`一共有3种布局，我只使用了`home`和`doc`，没有使用`page`布局。

我的博客一共使用了4个`slot`用于插入自定义的VUE组件，`slot`具体在什么位置还是要靠自己尝试：

| Name                 | Component    | Function                                             |
|----------------------|--------------|------------------------------------------------------|
| doc-after            | \<Comments/> | 在文章末尾提供[Giscus](https://github.com/giscus/giscus)评论区 |
| aside-outline-before | \<Me/>       | 在右侧加入\<Member/>显示头像和联系方式                             |
| home-hero-before     | \<Main/>     | 在主页显示头像和一些简短的描述                                      |
| home-hero-after      | \<Recent/>   | 按时间排序显示最近发布的文章                                       |

#### Comments.vue

对于博客来说，评论区很重要，这也能充实博客页面的空间，我尝试了3种解决方案：

- [Disqus](https://disqus.com/)
- [Gitalk](https://github.com/gitalk/gitalk)
- [Giscus](https://github.com/giscus/giscus)

Disqus和Gitalk存在我无法解决的Bug和样式问题，最终被放弃：

1. Disqus我使用了[vue-disqus](https://github.com/ktquez/vue-disqus)组件，显示效果很糟糕，它在我的网站上显示为明亮模式，而且我用CSS完全无法控制它的样式；
2. Gitalk同上，但可以用CSS调整，只是很烦人；

最终实际的解决方案只剩下了Giscus，最初我使用了`<Giscus/>`这个[giscus-component](https://github.com/giscus/giscus-component)官方提供的VUE组件，参考issue:[#1776](https://github.com/vuejs/vitepress/issues/1776)发现存在2个显示bug：

1. 在多个页面切换时评论区没有被刷新，仍显示上个页面的评论，该错误由VUE的组件重用导致，通过`:key`被修复，在Disqus中出现了同样的问题，但Gitalk没有该问题；
2. 从有评论的页面切换到没有评论的页面再返回有评论的页面，评论区将被截断，只能显示一小部分，推测该bug也是由VUE组件重用导致的，但不知如何修复。

最后我偶然发现在一个VitePress集成Giscus的[博客](https://sugarat.top/)中不存在该问题，并且源码在`GitHub Repo`中公开，于是我就去查看了对方的源码，并找到了解决方法: 答案是直接使用原生Giscus，它不存在上述第2点问题。

以下代码可以完成构建一个美观`<Comments/>`组件的任务，具体的参数参照[Giscus文档](https://giscus.app/)，注意Giscus的主题是可选的，显示效果很棒。

```vue
<script setup>
import {useData} from 'vitepress';

const {title} = useData()
</script>

<template>
  <div class="comments">
    <component
        :is="'script'"
        :key="title"
        src="https://giscus.app/client.js"
        data-repo=" ...... "
        data-repo-id=" ...... "
        data-category=" ...... "
        data-category-id=" ...... "
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-lang="en"
        data-theme="transparent_dark"
        data-loading="eager"
    />
  </div>
</template>
```

![giscus](https://s2.loli.net/2023/04/30/bBUk9hIy8DpQaxG.webp)

#### Me.vue

这个组件很简单，参考[文档](https://vitepress.dev/reference/default-theme-team-page)为VitePress提供的`<VPTeamMembers/>`组件添加头像、描述和4个链接就完成了。

需要注意的是`.vue`文件可以用以下语法导入SVG文件，比`config.js`方便的多：

```vue
<script setup>
import {VPTeamMembers} from 'vitepress/theme'
import email from '/email.svg?raw'

const members = [
  {
    ...
    links: [
      {
        icon: {svg: email},
        link: 'mailto:aiktb@outlook.com'
      }
    ]
  }
]
</script>
```



![members](https://s2.loli.net/2023/04/30/HCjTzVPk4hlvOo3.webp)

#### Main.vue & Recent.vue

这两个组件构成了我的博客主页，主要参考了[clark-cui](https://github.com/clark-cui)的[博客](https://visionary-sunflower-dc7ae3.netlify.app/)和[源码](https://github.com/clark-cui/vitepress-blog-zaun)，移除了略复杂的分页功能并且调整了CSS来适应我的主题。

注意使用这种方式自定义的Home主页应该移除所有的`index.md`中的VitePress默认配置的`frontmatter`。

#### createContentLoader

Recent.vue使用了这个函数用来获取`posts`目录下的所有`.md`文件数据，并且用`JavaScript`处理数据并渲染在页面。

`createContentLoader`需要按照VitePress[文档](https://vitepress.dev/guide/data-loading#createcontentloader)的说明新建立一个`/theme/posts.data.js`文件来使用，因为这个函数无法在`.vue`文件中导入。

UTC标准时间是精确到秒的，但写博客不可能将时间精确到秒，不做处理的话显示出来的时间后面跟着一串0，所以必须将date处理为字符串并只取日期部分，最后限制只取9篇最新的文章数据返回：

```js
import {createContentLoader} from 'vitepress';

export let data;

export default createContentLoader('posts/*.md', {
    transform(rawData) {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map(post => {
            const { frontmatter, ...rest } = post
            const date = new Date(frontmatter.date).toISOString().slice(0, 10)
            return {
                ...rest,
                frontmatter: {
                    ...frontmatter,
                    date: date
                }
            }
        }).slice(0, 9)
    }
})
```

#### Import Layout

参考[theme/components/Layout.vue](theme/components/Layout.vue)和[theme/index.js](theme/index.js)文件，具体的用法[文档](https://vitepress.dev/guide/extending-default-theme#layout-slots)写的很详细了，不做赘述。

## Custom CSS

整个开发过程工作量最大的就是自定义CSS来调整博客的主题，虽然有ChatGPT帮我写点，但是因为要微调的地方太多了，整体而言工作量还是很大的。

我的`custom.css`文件很难说有什么参考价值，因为我不是专业的前端开发人员，写的CSS真的是乱糟糟的毫无美感，只是不停的打补丁来调整样式。

这部分工作是很个性化且非常主观的，我只能简单谈谈有哪些注意事项，具体的CSS代码只能读者自己加油了！☕

### Color

对我个人的博客而言主要参考了以下两个网站的配色：

- [neovim.io](https://neovim.io/)
- [miyauchi.dev](https://miyauchi.dev/)

改CSS的方法就是用`F12`开发者工具直接查看类名和使用的`:root`颜色名称，然后在`custom.css`中直接覆盖掉，必要时使用`!important`强制覆盖样式。

### Font

默认的`lnter`字体无需排除，用作第二字体即可：

```css
:root {
    --vp-font-family-base: 'JetBrains Mono', lnter;
    --vp-font-family-mono: 'JetBrains Mono', lnter;
}
```

拉丁字体可以从[google-web-fonts-helper](https://gwfh.mranftl.com/)获取下载，但是中文字体很困难，不建议尝试。

建议还是添加`head`从网络导入Google Fonts，这要不了几行代码，但如果你执意用类似以下的方法加载字体：

```css
/* jetbrains-mono-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/jetbrains-mono-v17-latin-regular.woff2') format('woff2'); /* Super Modern Browsers */
}
```

那么这是行不通的，因为VitePress在这种情况下无法将其理解为`public/`路径，字体无法载入，只能使用丑陋的相对路径：

```css
src: url('../../public/fonts/jetbrains-mono-v17-latin-regular.woff2') format('woff2')
```

而如果你使用相对路径，VitePress Console会不停输出以下信息：

```js
files in the public directory are served at the root path.
Instead of /public/fonts/...woff2, use /fonts/...woff2.
```

## Deploy

### GitHub Action

在这一点上我真的要称赞VitePress团队，因为他们的[文档](https://vitepress.dev/guide/deploy#github-pages)中的`.github/workflow/deploy.yml`文件不需要做任何修改就能在GitHub Action上使用！

这种方式有一个优点是可以滚动更新，你的服务不会下线，如果你还使用`github.io`子域，那么你将没有任何花费。

自定义域名非常简单，只需要两步：

1. 设置你的DNS解析记录一条`A`记录和`AAAA`记录指向GitHub的IPV4和IPV6地址，参考[文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)；
2. 在以下GitHub仓库路径的设置将`Custom domain`设置为你想要的顶级域或子域。

```bash
https://github.com/${USER}/${REPO}/settings/pages
```

> 自定义域设置需要一些时间，如果你用的域运行在Cloudflare的CDN上，而且以前申请过SSL证书，在这段时间你的网站会显示"526 Invalid SSL certificate"。

![github-setting](https://s2.loli.net/2023/04/30/SJIm4oFneKt5hZf.webp)

> 顺带一提，如果你在用Cloudflare的CDN，并且发现你的VitePress项目404页面无法正常显示，那么参考issue:[#2270](https://github.com/vuejs/vitepress/issues/2270)。

### VPS

如果你有一台VPS，而且你不怕折腾，那么你也可以尝试在你的VPS直接部署VitePress博客，尽管这种方式无法简单的滚动更新且更加繁琐。

为了让服务能在你的终端会话被关闭后保持运行而不被杀死，需要`tmux`的帮助：

```bash
sudo apt install tmux
# Default port: 8080
git clone https://github.com/aiktb/rea.git
cd rea
npm install
tmux new-session -d 'npm run docs:build && npm run docs:preview'
```

用以下命令停止服务：

```bash
tmux kill-session -t 0
```

这种方式在我的4C8G VPS上，构建一次项目并上线服务器大约只需要25s，而用GitHub Action需要45s。但他每次更新VitePress版本都需要重新执行`npm i`。

### Docker

Docker不适用这个项目，因为需要频繁的更新源代码，每一次更新都需要重新构建镜像，当然也可以用GitHub Action自动构建镜像并推送到Docker Hub，然后用`docker compose`启动。

这种方法比GitHub Pages还麻烦又没有什么明显的优势，那我为什么不直接用GitHub Pages？总之，VitePress开发博客别尝试使用Docker，这是个坑。
