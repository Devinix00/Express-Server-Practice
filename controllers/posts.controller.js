const path = require("path");

function getPost(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "js.png")
  );
}

module.exports = {
  getPost,
};
