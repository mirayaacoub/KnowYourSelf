const { createUser } = require('../services/register.service');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    const { user } = req.body;
    if (!user) {
        console.log(user)
        return res.status(401).json({ message: "missing data" });
    }
    const result = await createUser(user);
    // user successfully inserted
    if (result.status === 201) {
        const token = jwt.sign({user_id:result?.user?.user_id}, process.env.SECRET_KEY)
        return res.status(201).json({ message: "successful", user: result.user, token: token})
    }
    res.status(401).json({ message: result.message });
    //inappropriate request
    //res.status(401).json({ message: "Unauthorized" });
}

module.exports = {
    registerController
}