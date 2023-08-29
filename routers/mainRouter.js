const express = require("express");
const router = express.Router();

// Enlaces entre archivos requeridos e importados.
let controllerMain = require("../controllers/controllerMain");


router.get("/", controllerMain.main);

module.exports = router;