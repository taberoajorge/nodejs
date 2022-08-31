const http = require("http");

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.write("<h1>Home</h1>");
      res.end();

      break;
    case "/admin":
      res.write("<h1>Control panel</h1>");
      res.end();

      break;

    default:
      res.write("<h1>404 not found</h1>");
      res.end();
      break;
  }


  res.end();
}

http.createServer(router).listen(3000);

console.log("listen on port 3000");
