const { Quiz } = require('../models');


const mainController = {
  async renderHomePage(req, res) {
    try {
      const Quizs = await Quiz.findAll({ include: [ "author",  "tags" ]});
      
      res.render("home", { Quizs });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },
};

module.exports = mainController;
