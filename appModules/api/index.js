const { getData, getRandomGame } = require("./api-utils");
const endpoints = require("./config");
const WEIGHT = require("./config");
module.exports = {
  getData,
  endpoints,
  getRandomGame,
  WEIGHT,
};
