# JinyuStudio + Afilmory 集成方案

## 概述

本文档详细说明了如何将 Afilmory 作为 `/gallery` 子路由集成到 JinyuStudio 主站，同时保持私有代码和低冲突同步上游更新的能力。

## 仓库架构

### 主站仓库 (jinyustudio-site)
- **位置**: https://github.com/huhubeibei/jinyustudio-site
- **部署**: GitHub Pages
- **内容**: JinyuStudio 主站静态文件

### Afilmory 私有仓库 (afilmory-private)
- **位置**: https://github.com/huhubeibei/afilmory-private
- **状态**: 私有仓库
- **结构**: 完整的 Afilmory Monorepo（包含 apps/web、packages/ui 等）

## Git 工作流策略

### Afilmory 分支管理

```
upstream/main  (上游官方代码，定期同步)
      ↓
      ↓ merge
      ↓
    main  (你的定制分支)
      ↓
  feature/*  (功能开发分支)
```

### 设置 Afilmory 私有仓库

在你的 `afilmory-private` 仓库中执行：

```bash
# 进入 afilmory 工作目录
cd afilmory-work

# 添加官方上游仓库
git remote rename origin upstream
git remote add origin https://github.com/huhubeibei/afilmory-private.git

# 设置 upstream/main 分支跟踪
git checkout -b upstream/main upstream/main

# 推送到私有仓库
git push -u origin --all
```

### 同步上游更新

```bash
# 1. 更新 upstream/main
git checkout upstream/main
git fetch upstream
git merge upstream/main

# 2. 创建同步 PR 分支
git checkout main
git checkout -b sync-upstream-$(date +%Y%m%d)
git merge upstream/main

# 3. 解决冲突后合并
git checkout main
git merge sync-upstream-$(date +%Y%m%d)
```

## 主站集成方案

### 选项 1: 独立部署 + 反向代理 (推荐)

**部署架构**:
- 主站部署在 GitHub Pages/Netlify/Vercel
- Afilmory 单独部署在 Vercel/Netlify
- 使用 Cloudflare 或 CDN 配置 `/gallery` 反向代理

**优点**:
- 低耦合，互不干扰
- 独立部署和回滚
- 性能优化简单

### 选项 2: 子模块集成

```
jinyustudio-site/
├── index.html
├── assets/
├── styles/
└── gallery/           # Git Submodule
    └── (afilmory apps/web 构建产物)
```

### 选项 3: 完整项目集成 (我们的选择)

将 Afilmory 作为独立应用嵌入主站，通过 iframe 或路由集成：

1. 在主站 HTML 添加链接到 Gallery
2. 部署 Afilmory 到 `/gallery` 路径

## 样式统一策略

### 方案: CSS 变量覆盖 + Tailwind 配置

**步骤**:

1. 在 `afilmory-private/apps/web` 中添加主题配置：

```typescript
// afilmory-private/apps/web/src/styles/jinyu-theme.css
:root {
  /* JinyuStudio 颜色变量 */
  --color-primary: #1a1a1a;
  --color-secondary: #f5f5f5;
  --color-accent: #c9a87c;
  
  /* 覆盖 Afilmory 变量 */
  --afilmory-bg: var(--color-secondary);
  --afilmory-text: var(--color-primary);
  --afilmory-accent: var(--color-accent);
}
```

2. 修改 Afilmory 的 Tailwind 配置：

```typescript
// afilmory-private/apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';
import jinyuTheme from './src/styles/jinyu-theme';

export default {
  presets: [jinyuTheme],
  // ...其他配置
} satisfies Config;
```

3. 组件级别的样式覆盖：

```css
/* afilmory-private/apps/web/src/components/custom-overrides.css */
.gallery-header {
  font-family: 'Inter', sans-serif !important;
}
```

## /gallery 集成步骤

### 1. 主站导航添加链接

在 `g:\clone\index.html` 中找到导航栏，添加：

```html
<a href="https://your-gallery-domain.com" class="site-header-nav-link">
  <span class="menu-text-1">Gallery</span>
  <span class="menu-text-2" aria-hidden="true">Gallery</span>
</a>
```

### 2. Afilmory 路由配置

修改 `afilmory-private/apps/web/src/router.tsx`:

```typescript
// 添加 base 路径配置
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(routes, {
  basename: '/gallery',
});
```

### 3. Afilmory Vite 配置

```typescript
// afilmory-private/apps/web/vite.config.ts
export default defineConfig({
  base: '/gallery/',
  // ...其他配置
});
```

## CI/CD 自动同步工作流

在 `afilmory-private` 中添加 GitHub Actions：

```yaml
# .github/workflows/sync-upstream.yml
name: Sync Upstream

on:
  schedule:
    - cron: '0 0 * * 0'  # 每周日 0 点
  workflow_dispatch:      # 手动触发

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Configure Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          
      - name: Add upstream
        run: git remote add upstream https://github.com/Afilmory/afilmory.git
        
      - name: Fetch upstream
        run: git fetch upstream
        
      - name: Create sync branch
        run: |
          git checkout -b upstream-main upstream/main
          git push -f origin upstream-main:upstream/main
          
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v5
        with:
          title: "Sync Upstream Changes"
          body: "Auto-sync from Afilmory upstream"
          branch: sync-upstream
```

## 部署清单

- [ ] 主站部署到 GitHub Pages/Vercel/Netlify
- [ ] Afilmory 私有仓库完整设置
- [ ] upstream/main 分支配置
- [ ] 自定义主题配置完成
- [ ] /gallery 路由正确配置
- [ ] CI/CD 同步工作流设置
- [ ] 完整测试集成效果

## 维护建议

1. **定期同步**: 每周或按需同步上游更新
2. **冲突策略**: 优先保留定制，仔细合并功能
3. **文档更新**: 每次大修改后更新本文档
4. **主题测试**: 每次同步后检查样式一致性

## 故障排除

### 样式冲突
- 检查 CSS 变量优先级
- 使用 `!important` 或更具体的选择器
- 验证 Tailwind 配置优先级

### 路由问题
- 检查 `basename` 配置
- 验证部署平台的重写规则
- 测试子路由刷新行为

## 联系
如有问题，参考 Afilmory 官方文档或联系维护者。
