import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..', 'browser');
const port = Number(process.env.PORT || 8080);
const host = '0.0.0.0';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
};

const staticExtensions = new Set(Object.keys(mimeTypes));

const indexPath = path.join(root, 'index.html');
const indexHtml = fs.existsSync(indexPath) ? fs.readFileSync(indexPath) : null;

if (!indexHtml) {
  console.error(`ERROR: ${indexPath} introuvable. Le build Angular a probablement échoué.`);
  process.exit(1);
}

function respond(res, status, body, contentType, extraHeaders = {}) {
  res.writeHead(status, { 'Content-Type': contentType, ...extraHeaders });
  res.end(body);
}

function isStaticAssetRequest(urlPath) {
  const ext = path.extname(urlPath).toLowerCase();
  return ext !== '' && staticExtensions.has(ext);
}

function isNavigationRequest(req) {
  const accept = req.headers.accept || '';
  return req.method === 'GET' && accept.includes('text/html');
}

function resolveFilePath(urlPath) {
  const cleanPath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.resolve(root, cleanPath);
  if (!filePath.startsWith(root)) {
    return null;
  }
  return filePath;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

  if (urlPath === '/health') {
    respond(res, 200, 'ok', 'text/plain; charset=utf-8');
    return;
  }

  const filePath = resolveFilePath(urlPath);

  if (!filePath) {
    respond(res, 403, 'Forbidden', 'text/plain; charset=utf-8');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    respond(res, 200, fs.readFileSync(filePath), mimeTypes[ext] || 'application/octet-stream');
    return;
  }

  // Fichier statique manquant (ex. chunk.js) → vraie 404
  if (isStaticAssetRequest(urlPath)) {
    respond(res, 404, 'Not Found', 'text/plain; charset=utf-8');
    return;
  }

  // Route Angular (reload /dashboard, /caisses, etc.) → index.html
  if (isNavigationRequest(req) || req.method === 'HEAD') {
    respond(res, 200, req.method === 'HEAD' ? '' : indexHtml, 'text/html; charset=utf-8', {
      'Cache-Control': 'no-cache',
    });
    return;
  }

  respond(res, 404, 'Not Found', 'text/plain; charset=utf-8');
});

server.listen(port, host, () => {
  console.log(`Optimo360 web — fichiers: ${root}`);
  console.log(`Optimo360 web — écoute sur http://${host}:${port}`);
  console.log('Optimo360 web — fallback SPA actif (reload sans 404)');
});
