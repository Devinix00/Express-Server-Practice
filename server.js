const http = require("http");

const PORT = 8080;

const targetObject = { a: "a", b: "b" };

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    req.on("data", (data) => {
      console.log(data);
      const stringfiedData = data.toString();
      console.log(stringfiedData);
      Object.assign(targetObject, JSON.parse(stringfiedData));
    });
  } else {
    if (req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write(JSON.stringify(targetObject));
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>About Page</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  }
});

fetch("http://localhost:8080", {
  method: "POST",
  body: JSON.stringify({ c: "c" }),
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
