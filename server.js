const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content);
    }
  });
});

function syncConfig() {
  try {
    const configPath = path.join(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
      const jsonContent = fs.readFileSync(configPath, 'utf8');
      const jsContent = `// Auto-synced from config.json\nwindow.APP_CONFIG = ${jsonContent.trim()};\n`;
      fs.writeFileSync(path.join(__dirname, 'config.js'), jsContent, 'utf8');
      console.log('[Config Sync] Successfully synced config.json -> config.js');
    }
  } catch (e) {
    console.error('[Config Sync Error]', e.message);
  }
}

// Initial sync
syncConfig();

// Watch config.json for changes
try {
  fs.watch(path.join(__dirname, 'config.json'), (eventType) => {
    if (eventType === 'change' || eventType === 'rename') {
      setTimeout(syncConfig, 50);
    }
  });
} catch (e) {
  console.warn('[Config Watcher Warn]', e.message);
}

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
