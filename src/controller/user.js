const userService = require("../services/user");

module.exports = {
  getUser: async (req, res, next) => {
    try {
      res.send(await userService.getUserByEmail(req.query.email));
    } catch (error) {
      return next(error);
    }
  },
};
