const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class User extends Model {}

User.init({
  // id + created_at + updated_at
  firstname: {
    type: DataTypes.STRING
  },
  
  // Equivalent RACCOURCI de la ligne précédente :
  // firstname: DataTypes.STRING

  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING, // VARCHAR(255)
    allowNull: false, // Interdiction d'avoir en BDD un utilisateur sans email
    unique: true // Interdiction d'avoir en BDD 2 utilisateurs avec le même email
  },
  
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "user",
});

// Exemple de query pour tester
// User.findAll().then(res => console.log(res));


module.exports = User;
