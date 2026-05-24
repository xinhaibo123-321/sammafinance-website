# Sammafinance 官网部署指南

## 方案：Cloudflare Pages（免费托管）

### 前提
- 你已有域名
- 注册一个 Cloudflare 账号（https://dash.cloudflare.com/sign-up）

---

## 第一步：上传代码到 GitHub

1. 登录 GitHub（没有就注册一个 https://github.com/signup）
2. 点击右上角 "+" → "New repository"
3. 仓库名填 `sammafinance-website`，选 Public，点 Create repository
4. 在本机打开终端，执行以下命令：

```bash
cd C:\Users\LB\WorkBuddy\2026-05-24-14-28-35\sammafinance-website
git init
git add .
git commit -m "Initial commit: Sammafinance website"
git remote add origin https://github.com/你的用户名/sammafinance-website.git
git branch -M main
git push -u origin main
```

---

## 第二步：部署到 Cloudflare Pages

1. 登录 Cloudflare Dashboard → 左侧选 "Workers & Pages"
2. 点 "Create application" → "Pages" 标签 → "Connect to Git"
3. 授权 GitHub，选择 `sammafinance-website` 仓库
4. 构建设置：
   - Framework preset: **None**
   - Build command: 留空
   - Build output directory: `/`（或留空）
5. 点 "Save and Deploy"
6. 等待 1-2 分钟部署完成

部署完成后，Cloudflare 会给你一个临时地址，类似 `sammafinance-website.pages.dev`

---

## 第三步：绑定自定义域名

1. 在 Cloudflare Pages 项目中 → "Custom domains" → "Set up a custom domain"
2. 输入你的域名（如 `www.sammafinance.com`）
3. Cloudflare 会提示你添加 DNS 记录：
   - 如果域名已在 Cloudflare 管理：自动添加 CNAME 记录，点确认即可
   - 如果域名在其他注册商：需要手动去域名后台添加 CNAME 记录
     - 主机记录: `www`（或 `@`）
     - 记录类型: `CNAME`
     - 记录值: `sammafinance-website.pages.dev`
4. 等待 DNS 生效（几分钟到几小时）

---

## 第四步：配置 HTTPS

Cloudflare Pages **自动配置 HTTPS**，无需额外操作。你的网站会自动使用 https:// 访问。

---

## 验证清单

- [ ] 输入域名能正常打开网站
- [ ] 网址显示 https:// 和小锁头
- [ ] 四个页面（首页/关于/服务/联系）都能正常访问
- [ ] 手机端显示正常
- [ ] 联系表单能提交

---

## 后续更新网站

每次你修改代码并 push 到 GitHub，Cloudflare Pages 会自动重新部署。

```bash
cd C:\Users\LB\WorkBuddy\2026-05-24-14-28-35\sammafinance-website
# 修改文件后...
git add .
git commit -m "Update: 描述你改了什么"
git push
```

1-2 分钟后新版本自动上线。

---

## 需要我帮你做的

如果你告诉我你的域名是什么、是否已有 GitHub 账号，我可以：
- 帮你初始化 Git 仓库并推送到 GitHub
- 远程协助你完成 Cloudflare 配置
- 帮你设置域名解析