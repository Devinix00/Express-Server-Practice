const axios = require("axios");

axios
  .get("https://naver.com")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
