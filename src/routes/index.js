const { Router } = require("express");
const routes = Router()

const musicRoutes = require("./music.routes");

routes.use("/music", musicRoutes);

module.exports = routes