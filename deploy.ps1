# 自动部署脚本
# 用途：推送到 GitHub 并在 Vercel 上部署

Write-Host "=== JinyuStudio 部署脚本 ===" -ForegroundColor Cyan

# 步骤 1: 推送到 GitHub
Write-Host "`n[1/3] 推送到 GitHub..." -ForegroundColor Yellow
git add -A
git commit -m "Update deployment configuration" -m "添加 Vercel 配置文件和部署文档"
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ 成功推送到 GitHub" -ForegroundColor Green
} else {
    Write-Host "✗ GitHub 推送失败，尝试重新连接..." -ForegroundColor Red
    Start-Sleep -Seconds 5
    git push origin main
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "请手动执行: git push origin main" -ForegroundColor Red
    }
}

# 步骤 2: 提示 Vercel 部署
Write-Host "`n[2/3] Vercel 部署说明" -ForegroundColor Yellow
Write-Host @"

请访问以下链接完成 Vercel 部署：

1. 打开浏览器访问: https://vercel.com
2. 登录 GitHub 账号
3. 点击 'Add New' → 'Project'
4. 选择 'huhubeibei/jinyustudio-site'
5. 点击 'Deploy'

"@ -ForegroundColor White

# 步骤 3: 打开相关链接
Write-Host "`n[3/3] 打开相关链接..." -ForegroundColor Yellow
Start-Process "https://vercel.com/new"
Start-Process "https://github.com/huhubeibei/jinyustudio-site"

Write-Host "`n=== 部署脚本完成 ===" -ForegroundColor Cyan
Write-Host "请按照上述步骤在浏览器中完成 Vercel 部署。" -ForegroundColor White
