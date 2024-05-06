const { createUser } = require('../services/register.service');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    const { user } = req.body;
    if (!user) {
        console.log(user)
        return res.status(400).json({ message: "missing data" });
    }
    const result = await createUser(user);
    // user successfully inserted
    if (result.status === 201) {
        const token = jwt.sign({ user_id: result?.user?.user_id }, process.env.SECRET_KEY)
        return res.status(201).json({ message: "User created successfully", user: result.user, token: token })
    }
    if (result.status === 409) {
        res.status(409).json({ message: result.message });
    }
    // internal server error
    res.status(500).json({ message: result.message });
}

module.exports = {
    registerController
}