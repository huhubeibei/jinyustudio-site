import http.server, socketserver, os, sys

os.chdir(r"g:\clone")
sys.stdout = sys.stderr
print(f"Working directory: {os.getcwd()}")

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving from {os.getcwd()} on port {PORT}")
    httpd.serve_forever()