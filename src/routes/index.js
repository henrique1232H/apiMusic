const { Router } = require("express");
const routes = Router()

const createMusic = require("./createMusic.routes");
const showMusic = require("./getMusic.routes")
const deleteMusic = require("./deleteMusic.routes")
const updateMusic = require("./updateMusic.routes")

routes.use("/createMusic", createMusic);
routes.use("/showArtist", showMusic);
routes.use("/deleteMusic", deleteMusic);
routes.use("/updateMusic", updateMusic)

module.exports = routes