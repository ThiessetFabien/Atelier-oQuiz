const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");
const quizController = require("./controllers/quizController");

// Création d'un router
const router = Router();

// Configuration du router
router.get("/", mainController.renderHomePage);
router.get("/levels", levelController.renderLevelsPage);
router.post("/levels", levelController.createLevel);
router.get("/quiz/:quiz_id", quizController.renderQuizPage);

// Export du router
module.exports = router;
