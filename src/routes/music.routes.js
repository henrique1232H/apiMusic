const express = require("express");

const routeMusic = express();

const Controllers = require("../controllers");

const controllers = new Controllers();

routeMusic.delete("/:id", controllers.deleteMusic);
routeMusic.post("/createMusic", controllers.create);
routeMusic.get("/seeMusic", controllers.showMusic);
routeMusic.patch("/:type/:id", controllers.updateMusic)


module.exports = routeMusic
