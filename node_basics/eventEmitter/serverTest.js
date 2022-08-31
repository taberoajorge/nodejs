const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  console.log(req.method);

  res.end('hello world');
})

const port = 3000;

server.listen(port, () => {
  console.log(`server  listening: http://localhost:${port}...`);
});
