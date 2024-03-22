const express = require("express");
const {
  postUser,
  getUsers,
  getUser,
} = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:userId", getUser);
usersRouter.post("/", postUser);

module.exports = usersRouter;
