const UserSchema = require("../mongo/user");

module.exports = {
  getUserByEmail: async (email) => {
    return await UserSchema.find({ email });
  },
};
