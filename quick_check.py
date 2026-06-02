
import os
root_dir = os.path.dirname(os.path.abspath(__file__))

# Check index.html
with open(os.path.join(root_dir, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

print("=" * 80)
print("Web Guidelines 修复状态检查")
print("=" * 80)

checks = [
    ('color-scheme meta', 'color-scheme' in html),
    ('theme-color meta', 'theme-color' in html),
    ('reduced motion script', 'reducedMotionCheck' in html),
    ('text-wrap: balance', 'text-wrap: balance' in html),
    ('logo aria-labelledby', 'aria-labelledby' in html)
]

print("\n检查结果:")
for name, ok in checks:
    print(f"  {'✅' if ok else '❌'} {name}")

# Check i18n.js
with open(os.path.join(root_dir, 'i18n.js'), 'r', encoding='utf-8') as f:
    i18n = f.read()

print(f"\n  {'✅' if 'document.documentElement.lang' in i18n else '❌'} html lang in i18n")

print("\n" + "=" * 80)
print("现在启动服务器进行浏览器验证!")
print("=" * 80)

os.remove(os.path.abspath(__file__))
