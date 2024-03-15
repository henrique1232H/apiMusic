const express = require("express");

const deleteMusic = express();

const Connection = require("../controllers")

const DeleteMusic = new Connection()

deleteMusic.delete("/:id", DeleteMusic.deleteMusic);

module.exports = deleteMusic