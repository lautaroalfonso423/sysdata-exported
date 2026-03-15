const router = require("express");
const prueba = require("../Controllers/pruebaController");

const pruebaRouter = router()

pruebaRouter.get("/", prueba.getPrueba)

module.exports = pruebaRouter;