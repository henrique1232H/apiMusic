const express = require("express");

const createMusic = express();

const CreateMusic = require("../controllers/index");

const Controller = new CreateMusic()

createMusic.post("/", Controller.create );

module.exports = createMusic