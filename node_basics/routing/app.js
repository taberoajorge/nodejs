// const myURL = new URL('https://wwww.platzi.com/cursos/programacion?order=ASCENDING&level=info');

// console.log(myURL.hostname);
// console.log(myURL.pathname);
// console.log(myURL.searchParams);
// console.log(myURL.searchParams.get('order'));

const http = require('http');
const {
  getRequestHandler,
  putRequestHandler,
  deleteRequestHandler,
  postRequestHandler,
} = require('./helpers/methods/index');

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':

      return getRequestHandler(req, res);
    case 'POST':

      return postRequestHandler(req, res);

    case 'PUT':

      return putRequestHandler(req, res);

    case 'DELETE':

      return deleteRequestHandler(req, res);


    default:
      console.log(`method can't be handle by server ${method}`);
      break;
  }

  res.end();
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})