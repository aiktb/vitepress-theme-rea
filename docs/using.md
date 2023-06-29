---
title: Using
outline: 2
---

# Toolbox I'm using

![using](https://s2.loli.net/2023/05/21/NthawoenYT7m5CE.webp)

## Device

![photo](https://s2.loli.net/2023/05/21/NSDwUGvj362leyM.webp)

## Visual Studio Code

在桌面操作系统上我只会使用VSCode作为我的文本编辑器，在一些轻量的坏境下很好用。

虽然VSCode可以通过集成插件变为Web Dev IDE，但我更喜欢使用JetBrains开箱即用的强大IDE，所以我的VSCode使用频率并不高。

值得一提的是VSCode对编写Bash Script具有一流的支持，尤其是和WSL2协作时，VSCode Remote不愧是VSCode的杀手级功能。

## Nano

Linux终端命令行限定，我从不在CLI上进行复杂的文本编辑，只是偶尔会修改一些轻量的配置文件。

不想使用配置麻烦并且快捷键反人类的Vim，Nano的功能对我来说刚刚好，即开即用、简单易懂，以下是我的Nano配置。

::: code-group

```bash [~/.nanorc]
set nohelp			# Turn off the default help prompt, Ctrl+G to reopen the prompt.
set autoindent 		# Enable newline auto-indent.
set tabstospaces	# Automatically convert tabs into spaces.
set tabsize 4		# Set the tab size to 4 spaces.
set linenumbers		# Enable window default line number, Alt+N can be closed.
set afterends		# Ctrl+Right will move to end of word instead of beginning.
```

:::

## Typora

Typora是我最喜欢用的Markdown编辑器，我所有的`.md`文件都是使用Typora编写的，包括这个博客的所有文章。

虽然所见即所得不是Typora的专利，但我认为它值得100CNY以内一个大版本的定价。

目前我正在使用[Drake-Material](https://theme.typora.io/theme/Drake/)主题，我稍微修改了该主题的CSS，以让它贴合我的博客主题。

## JetBrains IDE

JetBrains全家桶中我最常用的是WebStorm、IntelliJ IDEA Ultimate，我相信这是世界上最好用的IDE。

我经常使用这些插件(与特定语言无关):

- [GitHub Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot)
- [Tabnine AI Code Completion](https://plugins.jetbrains.com/plugin/12798-tabnine-ai-code-completion-js-java-python-ts-rust-go-php--more)
- [Rainbow Brackets](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets)
- [HighlightBracketPair](https://plugins.jetbrains.com/plugin/17320-highlightbracketpair)
- [CodeGlance Pro](https://plugins.jetbrains.com/plugin/18824-codeglance-pro)
- [Foldable ProjectView](https://plugins.jetbrains.com/plugin/17288-foldable-projectview)
- [Material Theme UI Lite](https://plugins.jetbrains.com/plugin/12124-material-theme-ui-lite)
- [Translation](https://plugins.jetbrains.com/plugin/8579-translation)
- [GitToolBox](https://plugins.jetbrains.com/plugin/7499-gittoolbox)
- [Grazie Professional](https://plugins.jetbrains.com/plugin/16136-grazie-professional)

## Chrome

Chrome有相对于Edge的绝对优势吗？我的回答是NO，Firefox/Chrome/Edge的使用体验大差不差，但我只需要一个浏览器。

我已经使用了两年Chrome，并且非常频繁的使用Google账号，同时没有任何理由切换到其他的浏览器，因此我会继续使用Chrome。

我使用以下的Chrome Extensions:

- [AdGuard AdBlocker](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en-US)
- [ChatGPT for Google](https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf?hl=en-US)
- [Checker Plus for Gmail™](https://chrome.google.com/webstore/detail/checker-plus-for-gmail/oeopbcgkkoapgobdbedcemjljbihmemj?hl=en-US)
- [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en-US)
- [Google Translate](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en-US)
- [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp?hl=en-US)
- [SuperCopy](https://chrome.google.com/webstore/detail/supercopy-enable-copy/onepmapfbjohnegdmfhndpefjkppbjkm?hl=en-US)
- [uBlacklist](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe?hl=en-US)
- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en-US)
- [Fix translation](https://chrome.google.com/webstore/detail/fix-translation/nefkkabmejdacaifhjoinegmoggdbgee?hl=en-US)

## Terminal

### Windows Terminal

WSL2配合Windows Terminal在Windows上提供了极佳的Linux坏境，并且这并不复杂，我很喜欢这个终端。

### [Termius](https://termius.com/)

一款支持移动设备的SSH终端，用于管理多个SSH会话，非常美观、轻便，我经常使用它。

## Shell

我在终端中为了方便使用Zsh，而在脚本中为了兼容性使用Bash。

关于我的Zsh配置你可以在[这篇文章](https://aiktb.com/posts/zsh-config)中查看。
