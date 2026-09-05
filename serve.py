#!/usr/bin/env python3
"""
Zero-dependency SPA web server for SoftArch IT Portfolio.
Serves the production build from the 'dist' directory with automatic SPA fallback to index.html
and handles local contact form submissions at /api/contact saving to inquiries.json.
"""

import os
import sys
import json
from datetime import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")
INQUIRIES_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "inquiries.json")

class SPARequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == "/api/contact":
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(body)
                data["received_at"] = datetime.now().isoformat()
                
                # Save to inquiries.json
                inquiries = []
                if os.path.exists(INQUIRIES_FILE):
                    try:
                        with open(INQUIRIES_FILE, 'r') as f:
                            inquiries = json.load(f)
                    except Exception:
                        inquiries = []
                inquiries.append(data)
                with open(INQUIRIES_FILE, 'w') as f:
                    json.dump(inquiries, f, indent=2)

                print(f"📩 [NEW INQUIRY RECEIVED] From: {data.get('name')} <{data.get('email')}> | Message: {data.get('message')[:60]}...")
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "message": "Inquiry recorded"}).encode('utf-8'))
                return
            except Exception as e:
                print("Error handling /api/contact:", e)
                self.send_response(500)
                self.end_headers()
                return

        return super().do_POST()

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not path.endswith(('.js', '.css', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.json')):
            self.path = "/index.html"
        return super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, SPARequestHandler)
    print("=" * 60)
    print(f"🚀 SoftArch IT Portfolio is running at: http://localhost:{PORT}")
    print(f"📂 Serving directory: {DIRECTORY}")
    print(f"📩 Inquiries logged to: {INQUIRIES_FILE}")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()

if __name__ == '__main__':
    run()
