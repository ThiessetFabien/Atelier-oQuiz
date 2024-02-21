// Load env variable
require("dotenv/config"); // équivalent : require("dotenv").config();

// Import external dependencies
const express = require("express");

// Import local dependencies
const router = require("./src/router");
const notFoundMiddleware = require("./src/middlewares/notFoundMiddleware");

// Create app
const app = express();

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Serve static assets
app.use(express.static("./public")); // Tous les fichiers présents dans le dossier 'public' seront accessibles directement depuis la racine du serveur !

// Add body parser
app.use(express.urlencoded({ extended: true })); // Permet de récupérer les body (encodé au format `application/x-www-form-urlencoded`) et les mettre dans req.body

// Configure app
app.use(router);

// Configure 'Not Found' middleware
router.use(notFoundMiddleware);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Serveur listening at http://localhost:${port}`);
});
