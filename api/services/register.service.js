const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
    const { username, email, password, role } = data;
    console.log(username, email, password, role);
    try {
        // Hash the password
        // console.log(password)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({ username: username, email: email, password: hashedPassword, role: role });

        if (user) {
            return { status: 201, message: 'User created successfully' };
        } //else {
        //     return { status: 500, message: 'Internal server error' };
        // }
    } catch (error) {
        // handle duplicate entry (unique constraint violation)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return { status: 409, message: 'User already exists' };
        }
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
};

module.exports = {
    createUser
};
