const express = require("express");

const showMusic = express();

const ShowMusic = require("../controllers/index");

const Controller = new ShowMusic()

showMusic.get("/:id", Controller.showMusic );

module.exports = showMusic