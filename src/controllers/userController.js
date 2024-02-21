const userController = {
  async login (req, res) {
    try {
      res.render('login');
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },
  async signUp (req, res) {
    try {
      res.render('signup');
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

module.exports = userController;