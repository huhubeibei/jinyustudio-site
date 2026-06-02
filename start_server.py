
import http.server
import socketserver
import webbrowser
import time
import threading

PORT = 8000

def start_server():
    """启动本地HTTP服务器"""
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"服务器在端口 {PORT} 启动")
        print(f"访问: http://localhost:{PORT}")
        
        # 在后台运行
        server_thread = threading.Thread(target=httpd.serve_forever)
        server_thread.daemon = True
        server_thread.start()
        
        return httpd

try:
    # 先检查是否有按钮相关的资源
    print("=== 检查资源文件 ===\n")
    
    import os
    
    # 检查BtnOutline脚本
    btn_script_path = r'g:\clone\_astro\BtnOutline.astro_astro_type_script_index_0_lang.cWlYYKkX.js'
    if os.path.exists(btn_script_path):
        print(f"✓ 按钮脚本存在: {btn_script_path}")
        print(f"  文件大小: {os.path.getsize(btn_script_path)} 字节")
    else:
        print(f"✗ 按钮脚本不存在")
    
    # 检查原始网站下载的HTML
    original_path = r'g:\clone\original_website.html'
    if os.path.exists(original_path):
        print(f"✓ 原始网站HTML存在")
    
    # 简单检查当前HTML
    with open(r'g:\clone\index.html', 'r', encoding='utf-8') as f:
        html = f.read()
        if 'btn-outline' in html:
            print("✓ HTML中有按钮标记")
        if 'data-btn-text' in html:
            print("✓ HTML中有按钮文字属性")
    
    print("\n=== 准备启动服务器 ===")
    
    # 启动服务器
    os.chdir(r'g:\clone')
    
    httpd = start_server()
    
    # 等待一下让服务器启动
    time.sleep(2)
    
    print("\n✅ 服务器已启动！")
    print(f"请在浏览器中打开: http://localhost:{PORT}")
    print("\n服务器将持续运行...")
    
    # 保持脚本运行
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n正在停止服务器...")
        httpd.shutdown()
        
except Exception as e:
    print(f"错误: {e}")
    import traceback
    traceback.print_exc()
