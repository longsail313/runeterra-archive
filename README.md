# 符文之地资料馆

这是一个静态 HTML 网站，可以直接用浏览器打开，也可以发布到 GitHub Pages、Vercel、Netlify、Cloudflare Pages 等静态网站平台。

## 本地打开

直接双击 `index.html` 即可。页面会联网读取 Riot Data Dragon、官方图片与官方技能视频资源。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个空仓库，例如 `runeterra-archive`。
2. 复制仓库地址，例如 `https://github.com/你的用户名/runeterra-archive.git`。
3. 在本文件夹运行：

```powershell
.\scripts\publish-github-pages.ps1 -RemoteUrl "https://github.com/你的用户名/runeterra-archive.git"
```

4. 打开 GitHub 仓库的 Settings -> Pages，把 Source 设置为 `Deploy from a branch`，Branch 选择 `gh-pages`，目录选择 `/root`。

之后每次更新本地文件，运行：

```powershell
.\scripts\sync.ps1
```

同步脚本会同时更新 `main` 和 `gh-pages`，线上地址通常是：

```text
https://longsail313.github.io/runeterra-archive/
```

## 自动同步

如果希望改完 `index.html` 后自动提交并推送，运行：

```powershell
.\scripts\watch-sync.ps1
```

保持这个窗口打开。脚本会监听 `index.html`，检测到保存后自动提交并推送到远程仓库。
