const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor en ejecución\n');
});

server.listen(port, () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${port}`);
});

process.on('SIGINT', () => {
  console.log('Cerrando servidor...');
  server.close(() => process.exit(0));
});
