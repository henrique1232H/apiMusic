const express = require("express");

const routeMusic = express();

const Controllers = require("../controllers");

const controllers = new Controllers();


routeMusic.delete("/deleteMusic/:id", controllers.deleteMusic);
routeMusic.post("/createMusic",  controllers.create);
routeMusic.get("/seeMusic", controllers.showMusic);
routeMusic.patch("/updateMusic/:type/:id",  controllers.updateMusic);
routeMusic.get("/seeMusicByArtist/:id", controllers.seeMusicByArtist)


module.exports = routeMusic
