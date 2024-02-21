const { Question, Level, Quiz, User, Tag, Answer } = require("../models");

const quizController = {
  async renderQuizPage(req, res) {
    try {
      const quizId = req.params.quiz_id;
      const quiz = await Quiz.findByPk(quizId, {
        include: [
          "author",
          "tags",
          {
            association: "questions",
            include: ["propositions", "level"],
          },
        ],
      });

      res.render("quiz", { quiz });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },
};

module.exports = quizController;
