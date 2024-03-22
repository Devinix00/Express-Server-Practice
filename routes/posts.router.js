const express = require("express");
const { getPost } = require("../controllers/posts.controller");

const postsRouter = express.Router();

postsRouter.get("/", getPost);

module.exports = postsRouter;
