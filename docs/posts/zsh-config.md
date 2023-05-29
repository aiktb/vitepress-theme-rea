---
title: 'Oh-My-Zsh + Powerlevel10k: Zsh一键配置脚本'
date: 2023-04-28
---

# Oh-My-Zsh+Powerlevel10k: Zsh一键配置脚本

![cover](https://s2.loli.net/2023/04/30/5UB3Dy8V4Fnim7c.webp)

> 本文使用Ubuntu22.04 & Windows Terminal，点击[这里](#configure-script)直接跳转到自动配置脚本。

## Why use zsh?

1. 美观的Shell主题以及代码高亮；
2. 比Bash更好用的代码提示和自动补全；
3. 丰富的插件以及主题支持。

![zsh](https://s2.loli.net/2023/04/28/HTpzjv492FYQin3.webp)

## Oh-My-Zsh

由于Zsh生态有大量插件和主题，需要[Oh-My-Zsh](https://ohmyz.sh/)这个开箱即用的工具用于管理插件和主题，并简化Zsh的配置。

以下是Oh-My-Zsh在[GitHub](https://github.com/ohmyzsh/ohmyzsh)开箱即用的主题和插件列表：

- [Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
- [Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

由于没有直接列出简短的描述，而且很多插件是开发者使用且没有什么大用，还需要点开链接才能查看具体的描述，不得不说这简直是浪费时间，所以以上的列表只适合想要淘宝的用户，尤其是在找寻alias插件的用户，普通用户建议使用我推荐的插件和主题即可。

也有很多Zsh的插件和主题没有集成到Oh-My-Zsh中，比如Powerlevel10k、zsh-autosuggestions，这些需要去对应的GitHub仓库按要求下载才能在Zsh中使用。

![oh-my-zsh](https://s2.loli.net/2023/04/28/RBd4Tlu9xstwcLV.webp)

## Plugins

因为我不太喜欢使用alias，所以不会包含命令别名的插件，以下是我个人使用的插件推荐：

> `thefuck`插件与`sudo`不兼容，他们都使用`Double ESC`快捷键。

| Name                                                                                          | Oh-My-Zsh | Priority | Description                |
|-----------------------------------------------------------------------------------------------|-----------|----------|----------------------------|
| [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)               | ❌         | High     | 支持Zsh终端输入代码高亮              |
| [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)                       | ❌         | High     | 支持Zsh终端输入代码补全建议            |
| [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search)     | ❌         | Medium   | 支持方向键上下移动按关键字搜索历史命令        |
| [sudo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo)                           | ✅         | Medium   | 按两次`ESC`为上一条或当前命令添加`sudo`  |
| [colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colored-man-pages) | ✅         | Medium   | 支持`man`帮助手册语法着色            |
| [extract](https://github.com/le0me55i/zsh-extract)                                            | ✅         | Low      | 命令`x`解压所有类型压缩包             |
| [autojump](https://github.com/wting/autojump)                                                 | ✅         | Low      | 命令`j`根据以往记录自动跳转目录          |
| [jsontools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jsontools)                 | ✅         | Low      | 命令`pp_json`接受JSON输入将其格式化输出 |

![colored-man-pages](https://s2.loli.net/2023/04/28/LwzD2PlKbQE8MAY.webp)

## Theme

唯一指定主题推荐[Powerlevel10k](https://github.com/romkatv/powerlevel10k)，不推荐其他任何Zsh主题，使用Powerlevel10k的原因只有一个：简洁美观。

P10K是目前Zsh使用人数最多的主题，并且没有包含在Oh-My-Zsh的默认配置中，足以看出Powerlevel10k的优秀和受欢迎。

> Powerlevel10k is a theme for Zsh. It emphasizes speed, flexibility and out-of-the-box experience.

Powerlevel10k的主题外观有多个可调整的选项，第一次安装完Powerlevel10k或者使用`p10k configure`命令时有界面提示可以配置Powerlevel的显示外观，比如是否显示Unicode字符、多条命令之间是否有间隙等。

![powerlevel10k](https://s2.loli.net/2023/04/28/AeXJUaTC2wO5LWp.webp)

## Zsh & Bash

作为Linux用户必须知道Zsh与Bash的几个不同之处，以防踩坑：

1. Zsh兼容大部分Bash语法，但有少部分不兼容，特别是Zsh不兼容Bash文件通配符`*`的使用；

2. Zsh有一部分Bash不含有的扩展语法，在目前Linux主流默认安装Bash的情况下建议不要使用Zsh扩展语法，Shell脚本也请使用`#!/bin/bash`以保证兼容性。

![neofetch](https://s2.loli.net/2023/04/28/Ewq3DWg7lcj1Tsx.webp)

## Configure Script

Zsh配置有3件事要做：

1. 安装常用插件和Powerlevel10k主题；
2. 将`.zcompdump-*`文件移动到`$ZSH/cache`目录；
3. 通过`/etc/skel/`目录将配置添加给所有新用户。

关于第2点，zsh使用以下格式保存用于加速命令补全的文件，默认放在`$HOME`目录：

```bash
-rw-r--r--  1 aiktb aiktb  49K May 15 11:13 .zcompdump
-rw-r--r--  1 aiktb aiktb  50K May 15 11:13 .zcompdump-shiro-5.8.1
-r--r--r--  1 aiktb aiktb 115K May 15 11:13 .zcompdump-shiro-5.8.1.zwc
```

这无疑是丑陋的，需要修改配置目录，对应的解决方法参考了[StackOverflow](https://stackoverflow.com/questions/62931101/i-have-multiple-files-of-zcompdump-why-do-i-have-multiple-files-of-these/76332959#76332959)。

关于第3点，`/etc/skel/`目录中的文件会在Linux新用户创建时自动复制到对应的`home`目录中，这样就免去了为每一个用户重新配置zsh之苦。

建议使用以下命令下载我的脚本一键配置：

```bash
curl -sL https://raw.githubusercontent.com/aiktb/dotzsh/master/zsh.sh.git | bash && zsh
```

以下就是具体的代码，很好地的完成了以上3点任务，使用apt包管理器的Linux用户可以直接使用，其余包管理器需要自行更改代码。

```bash
#!/bin/bash

# Or yum.
sudo apt install zsh -y
# Install oh-my-zsh.
0>/dev/null sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
ZSH_CUSTOM="$HOME/.oh-my-zsh/custom"
export ZSH_CUSTOM
# Configure plugins.
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "${ZSH_CUSTOM}"/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git "${ZSH_CUSTOM}"/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-history-substring-search "${ZSH_CUSTOM}"/plugins/zsh-history-substring-search
sed -i 's/^plugins=.*/plugins=(git\n extract\n sudo\n autojump\n jsontools\n colored-man-pages\n zsh-autosuggestions\n zsh-syntax-highlighting\n zsh-history-substring-search\n)/g' ~/.zshrc
# Install powerlevel10k and configure it.
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM}"/themes/powerlevel10k
sed -i 's/^ZSH_THEME=.*/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' ~/.zshrc
# Move ".zcompdump-*" file to "$ZSH/cache" directory.
sed -i -e '/source \$ZSH\/oh-my-zsh.sh/i export ZSH_COMPDUMP=\$ZSH\/cache\/.zcompdump-\$HOST' ~/.zshrc
# Configure the default ZSH configuration for new users.
sudo cp ~/.zshrc /etc/skel/
sudo cp ~/.p10k.zsh /etc/skel/
sudo cp -r ~/.oh-my-zsh /etc/skel/
sudo chmod -R 755 /etc/skel/
sudo chown -R root:root /etc/skel/
```

很多Zsh插件的安装文档使用了以下Zsh语法拓展，请勿在Bash中使用：

```zsh
${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
```

## Other than zsh

### Navi

推荐一个不在Zsh生态中的Shell Tool: [navi](https://github.com/denisidoro/navi)，它可以在一定程度上替代`man`，提供更方便易懂的命令行手册查询。

由于`navi`依赖[fzf](https://github.com/junegunn/fzf)，下载要先安装fzf，且不支持`apt`包管理器，使用以下命令手动安装：

```bash
sudo apt install fzf
bash <(curl -sL https://raw.githubusercontent.com/denisidoro/navi/master/scripts/install)
```

安装完成以后重启shell即可正常使用`navi`命令，然后下载所有的手册提示，就可以享受到更优秀的手册了。

![navi](https://s2.loli.net/2023/04/29/tA86jhHdYQf5NZG.webp)

### Httpie

以及另外一个Shell Tool: [httpie](https://github.com/httpie/httpie)，[文档](https://httpie.io/docs/cli)中有详细的介绍和说明，简单来说这是一个`curl`的替代品，使用命令`http`和`https`具有将类似`curl`输出高亮和JSON自动格式化的能力，个人认为在一定程度上比`curl`好用并且更美观。

用`apt`包管理器可以直接安装，注意`httpie`虽然包含在oh-my-zsh的插件列表中，却和`fzf`一样需要其他配置才能正常使用，并不如`apt`方便：

```bash
sudo apt install httpie
```

![httpie](https://s2.loli.net/2023/04/30/NgYIk2xDApd6wKU.webp)

### Powershell 7

也许你正在使用`WSL2`，那么我想你还偶尔会使用Powershell，Windows 11目前自带的是Powershell 5，但Powershell 7自带了类似zsh-autosuggestions的CLI命令补全提示功能，这对你会有帮助的，参考Microsoft的[文档](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3#install-powershell-using-winget-recommended)用下面这条命令在Powershell 5中下载Powershell 7。

```powershell
 winget install --id Microsoft.Powershell --source winget
```

![powershell7](https://s2.loli.net/2023/05/27/mvWkCA35KdRYzr4.webp)
