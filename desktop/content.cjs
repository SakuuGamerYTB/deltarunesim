const fs = require('node:fs');
const path = require('node:path');
const { Readable } = require('node:stream');

const ORIGIN = 'sim://localhost';
const CSP = "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self'; worker-src 'self' blob:; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'";
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.css': 'text/css', '.wasm': 'application/wasm',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.gif': 'image/gif',
  '.wav': 'audio/wav', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.m4a': 'audio/mp4',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ttf': 'font/ttf', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json'
};

function isLocalURL(value) {
  try { const u = new URL(value); return u.protocol === 'sim:' && u.host === 'localhost'; }
  catch { return false; }
}
function isAllowedRequest(value) {
  return isLocalURL(value) || value.startsWith('data:') || value.startsWith('blob:sim://localhost/');
}
function response(body, status, extra = {}) {
  return new Response(body, { status, headers: {
    'Content-Security-Policy': CSP, 'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer', ...extra
  }});
}
function createHandler(base) {
  const site = path.resolve(base, 'site');
  const readable = path.resolve(base, 'readable');
  return async function handle(request) {
    if (!isLocalURL(request.url)) return response('Forbidden', 403);
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url).pathname); }
    catch { return response('Bad path', 400); }
    if (pathname.includes('\\') || pathname.includes('\0') || pathname.includes(':') || pathname.split('/').includes('..')) {
      return response('Forbidden', 403);
    }
    if (request.method === 'POST' && pathname.startsWith('/api/')) return response(null, 204);
    if (!['GET', 'HEAD'].includes(request.method)) return response('Method not allowed', 405);
    try {
      const relative = pathname.replace(/^\/+/, '');
      let file = path.join(site, relative);
      if (path.extname(file) === '.js') {
        const overlay = path.join(readable, relative);
        if (fs.existsSync(overlay)) file = overlay;
      }
      let stat = await fs.promises.stat(file);
      if (stat.isDirectory()) {
        file = path.join(file, 'index.html');
        stat = await fs.promises.stat(file);
      }
      if (!stat.isFile()) return response('Not found', 404);
      const headers = { 'Content-Type': pathname === '/api/stats' ? 'application/json' : types[path.extname(file)] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
      let start = 0, end = stat.size - 1, status = 200;
      const range = request.headers.get('range');
      if (range) {
        const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
        if (!match || (!match[1] && !match[2])) return response(null, 416, { 'Content-Range': `bytes */${stat.size}` });
        start = match[1] ? Number(match[1]) : Math.max(0, stat.size - Number(match[2]));
        end = match[1] && match[2] ? Math.min(Number(match[2]), end) : end;
        if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= stat.size) {
          return response(null, 416, { 'Content-Range': `bytes */${stat.size}` });
        }
        status = 206;
        headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
      }
      headers['Content-Length'] = String(Math.max(0, end - start + 1));
      const body = request.method === 'HEAD' || stat.size === 0 ? null : Readable.toWeb(fs.createReadStream(file, { start, end }));
      return response(body, status, headers);
    } catch (error) {
      if (['ENOENT', 'ENOTDIR'].includes(error.code)) return response('Not found', 404);
      console.error('Local resource error:', error.message);
      return response('Unable to read local resource', 500);
    }
  };
}
module.exports = { ORIGIN, CSP, createHandler, isLocalURL, isAllowedRequest };
