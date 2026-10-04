"""Test HTTP de l’exécutable livré, depuis un répertoire de travail différent."""
import hashlib
import json
import socket
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

exe = Path(sys.argv[1]).resolve()
with socket.socket() as sock:
    sock.bind(('127.0.0.1', 0))
    port = sock.getsockname()[1]
with tempfile.TemporaryDirectory() as temp:
    with open(Path(temp) / 'server.log', 'w+') as log:
        process = subprocess.Popen([str(exe), '--no-open', '--port', str(port)], cwd=temp, stdout=log, stderr=log)
        base = f'http://127.0.0.1:{port}'
        try:
            for attempt in range(100):
                try:
                    response = urllib.request.urlopen(base + '/', timeout=1)
                    break
                except OSError:
                    if process.poll() is not None:
                        log.seek(0)
                        raise RuntimeError(log.read())
                    time.sleep(0.1)
            else:
                raise RuntimeError('Le serveur autonome ne démarre pas.')
            assert response.status == 200
            assert b'<html' in response.read().lower()
            assert "connect-src 'self'" in response.headers['Content-Security-Policy']
            manifest = json.loads((exe.parent / 'readable-manifest.json').read_text(encoding='utf-8'))
            main = next(item for item in manifest if item['file'].startswith('js/main-'))
            with urllib.request.urlopen(base + '/' + main['file']) as response:
                assert hashlib.sha256(response.read()).hexdigest() == main['sha256']
            req = urllib.request.Request(base + '/' + main['file'], headers={'Range': 'bytes=0-31'})
            with urllib.request.urlopen(req) as response:
                assert response.status == 206 and len(response.read()) == 32
            with urllib.request.urlopen(base + '/fight/roaring-knight') as response:
                assert response.status == 200
            req = urllib.request.Request(base + '/api/test', data=b'{}', method='POST')
            with urllib.request.urlopen(req) as response:
                assert response.status == 204
            print('PASS : démarrage autonome, HTML, JS lisible, CSP, plages HTTP, route et télémétrie locale.')
        finally:
            process.terminate()
            try:
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()
