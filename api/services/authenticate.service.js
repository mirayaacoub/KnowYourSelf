/***
 *authenticate.service.js
 ****/

const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

const authenticate = async (data) => {
  const { email, password } = data;

  try {
    const user = await User.findOne({ where: { email: email } });
    let correct = await bcrypt.compare(password, user.password);
    if (user && correct) {
      return { status: 200, message: "Successful", user: user };
    } else {
      return { status: 401, message: "Cannot login with these credentials!" };
    }
  } catch (error) {
    return { status: 500, message: "Internal error" };
  }
};

module.exports = {
  authenticate,
};
