const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");

// Création d'un router
const router = Router();

// Configuration du router
router.get("/", mainController.renderHomePage);
router.get("/levels", levelController.renderLevelsPage);
router.post("/levels", levelController.createLevel);

// Export du router
module.exports = router;
