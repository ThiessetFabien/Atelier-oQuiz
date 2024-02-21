require("dotenv/config");

const { Sequelize } = require('sequelize');

// Créer une instance de connexion à notre BDD oquiz
const sequelize = new Sequelize(process.env.PG_URL, {
  // Options complémentaires : 
  logging: console.log,
  define: {
    createdAt: "created_at", // Pour TOUS NOS MODELES, on fait le mapping des champs created_at (Postgres) à createdAt (Sequelize)
    updatedAt: "updated_at" // Pour TOUS NOS MODELES, on fait le mapping des champs updated_at (Postgres) à updatedAt (Sequelize)
  }
});

// Pas besoin du .connect(), il se fait automatiquement
// sequelize.authenticate(); // Pour tester éventuellement : Executing (default): SELECT 1+1 AS result
// sequelize.query("SELECT * FROM level").then(res => console.log(res)); // Pour tester éventuellement

// Le nom de la variable est au choix, généralement, on prend "sequelize"
module.exports = sequelize;

