const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write("Home");
      res.end();
      break;

    case "/about":
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>About Page</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
      break;

    default:
      res.writeHead(404);
      res.end();
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
