const express = require("express");

const routeMusic = express();

const Controllers = require("../controllers");

const controllers = new Controllers();

const middleware = (req,res, next) => {

    console.log("alo")

    next()
}

routeMusic.delete("/deleteMusic/:id", middleware,controllers.deleteMusic);
routeMusic.post("/createMusic", middleware ,controllers.create);
routeMusic.get("/seeMusic", middleware,controllers.showMusic);
routeMusic.patch("/updateMusic/:type/:id", middleware ,controllers.updateMusic);
routeMusic.get("/seeMusicByArtist/:id", middleware,controllers.seeMusicByArtist)


module.exports = routeMusic
