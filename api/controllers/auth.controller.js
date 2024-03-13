const { authenticate } = require('../services/authenticate.service');
var jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateController = async (req, res) => {
    const user = req.body;

    if (!user) {
        return res.status(401).json({ message: "Missing data" })
    }
    const result = await authenticate(user.user);
    if (result.status === 200) {
        const token = jwt.sign({ user_id: result?.user?.user_id }, process.env.SECRET_KEY)
        console.log(result.message, result.user);
        return res.status(200).json({ message: result.message, user: result.user, token: token })
    }
    console.log(result.message);
    return res.status(401).json({ message: result.message });

}

module.exports = {
    authenticateController,
}