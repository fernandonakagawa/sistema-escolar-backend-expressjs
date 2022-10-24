const express = require("express");

const HomeController = require("./routes/HomeController");
const SobreController = require("./routes/SobreController");
const CursosController = require("./routes/CursosController");
const routes = express.Router();

routes.get("/", HomeController.index);
routes.get("/sobre", SobreController.index);
routes.get("/cursos", CursosController.index);

module.exports = routes;
