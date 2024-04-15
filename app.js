const http = require("http");
const mainRouteController = require("./contollers/main.js");
const defaultRouteController = require("./contollers/default.js");
const gameRouteController = require("./contollers/games.js");
const voteRouteController = require("./contollers/vote.js");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});
server.listen(3005);
