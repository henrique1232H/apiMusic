const express = require("express");
const server = express();
const routes = require("./routes");

const migrationRun = require("./database/sqlite/migrations");

server.use(express.json());
const PORT = 3336;

migrationRun()

server.use(routes)

server.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`)
})

