const express = require("express");
const {
  postUser,
  getUsers,
  getUser,
} = require("./controllers/users.controller");
const { getPost } = require("./controllers/posts.controller");

const PORT = 8080;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method}, ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/users", getUsers);
app.post("/users", postUser);
app.get("/users/:userId", getUser);

app.get("/posts", getPost);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
