# JinyuStudio 网站部署指南

## 当前状态
- ✅ 所有代码已准备就绪
- ✅ Vercel 配置文件已创建
- ⏳ 等待推送到 GitHub

## 手动部署步骤

### 1. 推送代码到 GitHub

在 `g:\clone` 目录执行：
```bash
git push origin main
```

### 2. 在 Vercel 上部署

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New" → "Project"
4. 导入 `huhubeibei/jinyustudio-site` 仓库
5. 点击 "Deploy"

### 3. 配置自定义域名（可选）

1. 在 Vercel 项目 Settings → Domains
2. 添加你的域名 `jinyustudio.com`
3. 按照指示配置 DNS 记录

## 部署后检查清单

- [ ] 主页面正常加载
- [ ] Gallery 链接工作
- [ ] /gallery 页面显示 Coming Soon
- [ ] 所有动画正常播放
- [ ] 控制台无 404 错误

## 技术支持

如有问题，请参考：
- Vercel 文档: https://vercel.com/docs
- GitHub Pages: https://pages.github.com/
