const express = require("express");

const updateMusic = express();

const Connection = require("../controllers");

const UpdateMusic = new Connection()


updateMusic.patch("/:type/:id", UpdateMusic.updateMusic);

module.exports = updateMusic