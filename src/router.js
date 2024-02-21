const { Router } = require("express");
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");
const quizController = require("./controllers/quizController");
const tagController = require("./controllers/tagController");
const userController = require("./controllers/userController");

// Création d'un router
const router = Router();

// Configuration du router
router.get("/", mainController.renderHomePage);
router.get("/levels", levelController.renderLevelsPage);
router.post("/levels", levelController.createLevel);
router.post("/levels/:id", levelController.deleteLevel);
router.get("/quiz/:quiz_id", quizController.renderQuizPage);
router.get("/tags", tagController.renderAllTagsPage);
router.get("/signup", userController.signUp);
router.get("/login", userController.login);

// Export du router
module.exports = router;
