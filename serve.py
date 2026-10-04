#!/usr/bin/env python3
"""Standalone local simulator server. Python 3, no external dependencies."""
import argparse
import json
import re
import sys
import threading
import webbrowser
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

BASE = Path(sys.executable).resolve().parent if getattr(sys, 'frozen', False) else Path(__file__).resolve().parent
ROOT = BASE / 'site'
READABLE = BASE / 'readable'
USE_READABLE = False
CSP = (
    "default-src 'self' data: blob:; "
    "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob:; "
    "style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; "
    "media-src 'self' data: blob:; connect-src 'self'; "
    "worker-src 'self' blob:; frame-src 'none'; object-src 'none'; "
    "base-uri 'self'; form-action 'none'"
)

class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map,
                      '.js': 'text/javascript', '.mjs': 'text/javascript',
                      '.wasm': 'application/wasm', '.webmanifest': 'application/manifest+json',
                      '.json': 'application/json', '.ogg': 'audio/ogg', '.mp4': 'video/mp4'}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def translate_path(self, path):
        original = Path(super().translate_path(path))
        if USE_READABLE and original.is_relative_to(ROOT):
            candidate = READABLE / original.relative_to(ROOT)
            if candidate.is_file() and candidate.suffix == '.js':
                return str(candidate)
        return str(original)

    def end_headers(self):
        self.send_header('Content-Security-Policy', CSP)
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Referrer-Policy', 'no-referrer')
        self.send_header('X-Frame-Options', 'DENY')
        super().end_headers()

    def send_head(self):
        self.byte_range = None
        p = unquote(urlsplit(self.path).path)
        file = Path(self.translate_path(self.path)).resolve()
        if ROOT not in file.parents and READABLE not in file.parents and file != ROOT:
            self.send_error(HTTPStatus.FORBIDDEN)
            return None
        if file.is_dir() and (file / 'index.html').is_file():
            file = file / 'index.html'
            self.path = p.rstrip('/') + '/index.html'
        if not file.is_file():
            return super().send_head()
        size = file.stat().st_size
        if self.headers.get('Range'):
            match = re.fullmatch(r'bytes=(\d*)-(\d*)', self.headers['Range'].strip())
            try:
                if not match or not any(match.groups()):
                    raise ValueError()
                first, last = match.groups()
                if first:
                    start, end = int(first), min(int(last) if last else size - 1, size - 1)
                else:
                    start, end = max(0, size - int(last)), size - 1
                if start > end or start >= size:
                    raise ValueError()
            except ValueError:
                self.send_response(416)
                self.send_header('Content-Range', f'bytes */{size}')
                self.send_header('Content-Length', '0')
                self.end_headers()
                return None
            self.byte_range = (start, end)
            f = file.open('rb')
            f.seek(start)
            self.send_response(206)
            self.send_header('Content-Type', self.guess_type(str(file)))
            self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Content-Length', str(end - start + 1))
            self.end_headers()
            return f
        if p == '/api/stats':
            f = file.open('rb')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(size))
            self.end_headers()
            return f
        return super().send_head()

    def copyfile(self, source, outputfile):
        try:
            if self.byte_range is None:
                return super().copyfile(source, outputfile)
            remaining = self.byte_range[1] - self.byte_range[0] + 1
            while remaining:
                chunk = source.read(min(256 * 1024, remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass  # The browser may interrupt video preloading.

    def do_POST(self):
        # Discard telemetry without storage or forwarding.
        if not urlsplit(self.path).path.startswith('/api/'):
            self.send_error(405)
            return
        self.close_connection = True
        self.send_response(204)
        self.send_header('Content-Length', '0')
        self.send_header('Connection', 'close')
        self.end_headers()


class LocalServer(ThreadingHTTPServer):
    request_queue_size = 128
    daemon_threads = True

def main():
    global USE_READABLE
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8765)
    parser.add_argument('--open', action='store_true', help='Open the browser')
    parser.add_argument('--readable', action='store_true', help='Run readable JavaScript from readable/')
    args = parser.parse_args()
    USE_READABLE = args.readable
    if USE_READABLE:
        missing = [p.relative_to(ROOT) for p in ROOT.rglob('*.js')
                   if not (READABLE / p.relative_to(ROOT)).is_file()]
        if missing:
            parser.exit(1, f'Incomplete readable copy: {len(missing)} missing files.\n')
    url = f'http://127.0.0.1:{args.port}/'
    try:
        server = LocalServer(('127.0.0.1', args.port), Handler)
    except OSError as exc:
        parser.exit(1, f'Unable to start: {exc}\nTry another port with --port 8767.\n')
    print(f'DELTARUNE Offline ({"readable" if USE_READABLE else "original"}) : {url}\nNo Internet connection required. Press Ctrl+C to stop.', flush=True)
    if args.open:
        threading.Timer(0.3, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == '__main__':
    main()
