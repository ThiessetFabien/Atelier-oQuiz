const { Tag } = require("../models");

const tagController = {
  async renderAllTagsPage(req, res) {
    try {

      // Récupérer tous les tags en incluant leurs quizzes associés
      const tags = await Tag.findAll({
        include: "quizzes"
      });
  
      // Render la vue tags avec les bonnes données
      res.render("tags", { tags });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};


module.exports = tagController;
