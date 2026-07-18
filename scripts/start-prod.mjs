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

function respond(res, status, body, contentType) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(body);
}

const indexPath = path.join(root, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`ERROR: ${indexPath} introuvable. Le build Angular a probablement échoué.`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);

  if (urlPath === '/health') {
    respond(res, 200, 'ok', 'text/plain; charset=utf-8');
    return;
  }

  const relativePath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root)) {
    respond(res, 403, 'Forbidden', 'text/plain; charset=utf-8');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    respond(res, 200, fs.readFileSync(filePath), mimeTypes[ext] || 'application/octet-stream');
    return;
  }

  respond(res, 200, fs.readFileSync(indexPath), 'text/html; charset=utf-8');
});

server.listen(port, host, () => {
  console.log(`Optimo360 web — fichiers: ${root}`);
  console.log(`Optimo360 web — écoute sur http://${host}:${port}`);
});
