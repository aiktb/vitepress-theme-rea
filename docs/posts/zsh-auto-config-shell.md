---
title: 'Oh My Zsh + Powerlevel10k: Zsh一键配置脚本'
date: 2023-04-28
---

# Oh-My-Zsh+Powerlevel10k: Zsh一键配置脚本

![ZSH A NICE terminal](https://s2.loli.net/2023/04/21/PMaimRyZsV6CXnk.webp)

> 本文使用Ubuntu22.04 & Windows Terminal，点击[这里](#Configure-Script)直接跳转到自动配置脚本。

## Why use zsh?

1. 美观的Shell主题以及代码高亮；
1. 比Bash更好用的代码提示和自动补全；
1. 丰富的插件以及主题支持。

![image-20230428190430832](./../../../../AppData/Roaming/Typora/typora-user-images/image-20230428190430832.png)

## Oh-My-Zsh

由于Zsh生态有大量插件和主题，需要[Oh-My-Zsh](https://ohmyz.sh/)这个开箱即用的工具用于管理插件和主题，并简化Zsh的配置。

以下是Oh-My-Zsh在[GitHub](https://github.com/ohmyzsh/ohmyzsh)开箱即用的主题和插件列表：

- [Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
- [Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

由于没有直接列出简短的描述，而且很多插件是开发者使用且没有什么大用，还需要点开链接才能查看具体的描述，不得不说这简直是浪费时间，所以以上的列表只适合想要淘宝的用户(尤其是在找寻alias的用户)，普通用户建议使用我推荐的插件和主题即可。

也有很多Zsh的插件和主题没有集成到Oh-My-Zsh中，比如Powerlevel10k、zsh-autosuggestions，这些需要去对应的GitHub仓库按要求下载才能在Zsh中使用。

![image-20230428223545110](https://s2.loli.net/2023/04/28/RBd4Tlu9xstwcLV.webp)

## Plugins

因为我不太喜欢使用alias，所以不会包含命令别名的插件，以下是我个人使用的插件推荐：

> `thefuck`插件与`sudo`不兼容，他们都使用`Double ESC`快捷键。

| Name                                                         | Oh-My-Zsh | Priority | Description                             |
| ------------------------------------------------------------ | --------- | -------- | --------------------------------------- |
| [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) | ❌         | High     | 支持Zsh终端输入代码高亮                 |
| [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) | ❌         | High     | 支持Zsh终端输入代码补全建议             |
| [sudo](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo) | ✅         | Medium   | 按两次`ESC`为上一条或当前命令添加`sudo` |
| [colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/colored-man-pages) | ✅         | Medium   | 支持man帮助手册语法着色                 |
| [extract](https://github.com/le0me55i/zsh-extract)           | ✅         | Low      | 命令`x`解压所有类型压缩包               |
| [autojump](https://github.com/wting/autojump)                | ✅         | Low      | 命令`j`根据以往记录自动跳转目录         |
| [jsontools](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jsontools) | ✅         | Low      | 接受json输入将其格式化输出              |

![image-20230428201007113](https://s2.loli.net/2023/04/28/LwzD2PlKbQE8MAY.webp)

## Theme

唯一指定主题推荐[Powerlevel10k](https://github.com/romkatv/powerlevel10k)，不推荐其他任何Zsh主题，使用Powerlevel10k的原因只有一个：简洁美观。

P10K是目前Zsh使用人数最多的主题，并且没有包含在Oh-My-Zsh的默认配置中，足以看出Powerlevel10k的优秀和受欢迎。

> Powerlevel10k is a theme for Zsh. It emphasizes [speed](https://github.com/romkatv/powerlevel10k#uncompromising-performance), [flexibility](https://github.com/romkatv/powerlevel10k#extremely-customizable) and [out-of-the-box experience](https://github.com/romkatv/powerlevel10k#configuration-wizard).

Powerlevel10k的主题外观有多个可调整的选项，第一次安装完Powerlevel10k或者使用`p10k configure`命令时有界面提示可以配置Powerlevel的显示外观，比如是否显示Unicode字符、多条命令之间是否有间隙等。

![image-20230428203111033](https://s2.loli.net/2023/04/28/AeXJUaTC2wO5LWp.webp)

## Zsh & Bash

作为Linux用户必须知道Zsh与Bash的几个不同之处，以防踩坑：

1. Zsh兼容大部分Bash语法，但有少部分不兼容，特别是Zsh不兼容Bash文件通配符`*`的使用；

2. Zsh有一部分Bash不含有的扩展语法，在目前Linux主流默认安装Bash的情况下建议不要使用Zsh扩展语法，Shell脚本也请使用`#!/bin/bash`以保证兼容性。


![bash&zsh](https://s2.loli.net/2023/04/28/Ewq3DWg7lcj1Tsx.webp)

## Configure Script

以下脚本为当前的终端用户安装并配置Zsh插件和主题：

```bash
#!/bin/bash
# zsh.sh

# Or yum.
sudo apt install zsh -y
# Install oh-my-zsh.
0>/dev/null sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
ZSH_CUSTOM="$HOME/.oh-my-zsh/custom"
export ZSH_CUSTOM
# Configure plugins.
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "${ZSH_CUSTOM}"/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git "${ZSH_CUSTOM}"/plugins/zsh-autosuggestions
sed -i 's/^plugins=.*/plugins=(git extract sudo autojump jsontools colored-man-pages zsh-autosuggestions zsh-syntax-highlighting)/g' ~/.zshrc
# Install powerlevel10k and configure it.
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM}"/themes/powerlevel10k
sed -i 's/^ZSH_THEME=.*/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' ~/.zshrc
```

> 很多Zsh插件的安装使用了`${ZSH_CUSTOM:-~/.oh-my-zsh/custom}`，该语法是Zsh拓展，请勿在Bash Script中使用。

建议使用以下命令：

```bash
curl -sL https://raw.githubusercontent.com/aiktb/zsh-config/master/zsh.sh | bash && zsh
```

> 注意`githubusercontent.com`已被GFW封锁。

### Muti-user

以下脚本将Zsh配置添加到每一个新建用户的home目录中：

```bash
#!/bin/bash
# skel.sh

sudo cp ~/.zshrc /etc/skel/
sudo cp ~/.p10k.zsh /etc/skel/
sudo cp -r ~/.oh-my-zsh /etc/skel/
sudo chmod -R 755 /etc/skel/
sudo chown -R root:root /etc/skel/
```

建议使用以下命令：

```bash
curl -sL https://raw.githubusercontent.com/aiktb/zsh-config/master/skel.sh | bash
```

![image-20230428220829254](https://s2.loli.net/2023/04/28/5qBetXNgchw9I3Z.webp)
