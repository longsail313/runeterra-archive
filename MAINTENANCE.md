# 网站维护与发布手册

这份文档用于以后换电脑、换 AI 模型、或重新配置环境时，继续维护并发布“符文之地资料馆”网站。

## 1. 这个网站现在在哪里

仓库地址：

```text
https://github.com/longsail313/runeterra-archive
```

线上访问地址：

```text
https://longsail313.github.io/runeterra-archive/
```

核心文件：

```text
index.html
champions.html
systems.html
items.html
regions.html
world.html
sources.html
assets/styles.css
assets/app.js
```

这个网站是纯静态网站，没有数据库、没有后端服务。主要内容通过浏览器实时读取 Riot Data Dragon、官方图片 CDN、官方技能视频资源、国服官方资料链接，以及用于系统卡片配图的 CommunityDragon 客户端资产镜像。

## 2. 新电脑需要准备什么

至少需要：

```text
Git
一个浏览器，例如 Edge 或 Chrome
GitHub 账号 longsail313 的仓库访问权限
```

推荐但不是必须：

```text
VS Code 或任意代码编辑器
PowerShell 7 或 Windows 自带 PowerShell
```

安装 Git 后，在终端检查：

```powershell
git --version
```

如果能显示版本号，说明 Git 可用。

## 3. 在新电脑下载网站源码

选择一个你想保存项目的位置，例如桌面或文档目录，然后运行：

```powershell
git clone https://github.com/longsail313/runeterra-archive.git
cd runeterra-archive
```

检查状态：

```powershell
git status
```

正常情况下会看到：

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

## 4. 本地预览网站

最简单方式：

```text
直接双击 index.html
```

更推荐的方式是启动本地服务，因为这样更接近线上访问环境：

```powershell
python -m http.server 4173
```

然后浏览器打开：

```text
http://127.0.0.1:4173/
```

如果新电脑没有 Python，也可以直接双击 `index.html`。这个项目目前只有一个 HTML 文件，双击打开通常也能使用。

## 5. 修改网站

主要改：

```text
页面结构：各自的 .html 文件
公共样式：assets/styles.css
公共逻辑：assets/app.js
```

常见修改位置：

```text
首页：index.html
英雄页：champions.html
系统页：systems.html
装备页：items.html
阵营页：regions.html
世界观页：world.html
来源页：sources.html
页面样式：assets/styles.css
英雄/装备/系统数据逻辑：assets/app.js
地区说明：REGIONS
世界观说明：WORLD_TOPICS
英雄所属地区映射：REGION_BY_ID
```

注意：

```text
不要把非官方资料随便写进背景故事。
英雄技能、英雄简介、图标和原画优先继续使用 Riot Data Dragon。
系统卡片的野怪、防御塔、建筑和龙类配图可以使用 CommunityDragon 客户端资产镜像，但不要把它描述成 Riot 官方站点；页面文案需要明确它是客户端资产镜像。
中文官方外链优先使用 lol.qq.com 和 yz.lol.qq.com。
如果某些技能视频无法加载，不要用第三方剪辑替代；保留官方页回退入口。
```

## 6. 修改后如何发布

先确认改动：

```powershell
git status
```

如果你改了页面、样式或脚本，最省事的方式是运行：

```powershell
.\scripts\sync.ps1
```

这个脚本会：

```text
把改动提交到 Git
推送到 GitHub 的 main 分支
同步到 gh-pages 分支
触发 GitHub Pages 更新线上网页
```

线上地址仍然是：

```text
https://longsail313.github.io/runeterra-archive/
```

GitHub Pages 通常会在几十秒到几分钟内刷新。

## 7. 如果 PowerShell 禁止运行脚本

如果看到“因为在此系统上禁止运行脚本”之类的提示，用这个命令运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync.ps1
```

如果仍然不行，可以手动发布：

```powershell
git add index.html README.md MAINTENANCE.md .gitignore .nojekyll scripts
git commit -m "Update site"
git push origin main
git push origin main:gh-pages
```

## 8. 如何保存后自动同步

运行：

```powershell
.\scripts\watch-sync.ps1
```

保持这个 PowerShell 窗口打开。之后每次保存 `index.html`，脚本会自动提交并推送。若你主要修改的是 `assets/app.js`、`assets/styles.css` 或其它页面文件，建议直接运行 `scripts/sync.ps1` 手动同步。

如果 PowerShell 禁止运行脚本：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\watch-sync.ps1
```

停止自动同步：

```text
在那个窗口按 Ctrl + C
```

## 9. 如果 GitHub 要求登录

第一次在新电脑推送时，GitHub 可能弹出浏览器登录窗口。照提示登录 `longsail313` 账号即可。

如果命令行提示没有权限，常见原因是：

```text
当前电脑没有登录 GitHub
登录的不是 longsail313
仓库权限不足
GitHub 凭据过期
```

可以先试：

```powershell
git pull
git push
```

如果仍然失败，重新登录 GitHub，或在 GitHub Desktop / VS Code 中登录账号后再试。

## 10. 如果线上页面没有更新

先检查本地是否已推送：

```powershell
git status
```

如果显示 ahead，说明本地提交还没推上去，运行：

```powershell
git push origin main
git push origin main:gh-pages
```

如果 GitHub 已推送但网页还没变：

```text
等待 1 到 3 分钟
浏览器按 Ctrl + F5 强制刷新
用隐身窗口打开线上地址
检查 GitHub 仓库 Settings -> Pages 是否使用 gh-pages / root
```

## 11. 给未来 AI 模型的任务说明

以后你可以把下面这段直接发给新的 AI：

```text
请维护这个静态网站项目：

仓库：https://github.com/longsail313/runeterra-archive
线上：https://longsail313.github.io/runeterra-archive/
核心文件：
- index.html
- champions.html
- systems.html
- items.html
- regions.html
- world.html
- sources.html
- assets/styles.css
- assets/app.js

要求：
1. 这是一个纯静态 HTML 网站，多页面结构；页面改 HTML，样式改 assets/styles.css，逻辑改 assets/app.js。
2. 英雄资料、技能、图标、原画必须优先来自 Riot Data Dragon。
3. Data Dragon 没有覆盖的野怪、防御塔、龙类和建筑配图，可以使用可对应到游戏对象文件名的客户端资产镜像。
4. 龙魂、地图机制等精确数值不要凭印象写；每次更新都要重新核对公开游戏资料或官方版本说明。
5. 背景故事和世界观不能杜撰；中文官方入口优先使用 lol.qq.com 与 yz.lol.qq.com。
6. 技能演示视频只使用官方资源路径；加载失败时显示官方页面入口，不用第三方视频替代。
7. 修改后先本地预览，再运行 scripts/sync.ps1 同步到 GitHub Pages。
8. 同步时必须推送 main，并同步 main 到 gh-pages：
   git push origin main
   git push origin main:gh-pages
```

## 12. 建议的日常流程

每次维护都按这个顺序：

```powershell
git pull
```

修改对应页面、`assets/styles.css` 或 `assets/app.js`。

本地打开检查。

```powershell
.\scripts\sync.ps1
```

打开线上地址检查：

```text
https://longsail313.github.io/runeterra-archive/
```

这样最稳。
