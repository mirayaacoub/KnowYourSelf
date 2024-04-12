const { User } = require('../models/user.model');
const { getUserByEmail } = require('../services/user.service');
const { createPatient } = require('../services/patient.service')
const { createTherapist } = require('../services/therapist.service')
const bcrypt = require('bcrypt');

const createUser = async (data) => {
    const { username, email, password, role, diagnosis_history, specialty, experience_years } = data;
    console.log(username, email, password, role);
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({ username: username, email: email, password: hashedPassword, role: role });

        let patient, therapist;
        if (user) {
            // Get id of created user from db
            const createdUserId = (await getUserByEmail({ email })).userId;
            console.log(createdUserId)
            if (role === 'patient') {
                try {
                    patient = await createPatient({ user_id: createdUserId, diagnosis_history: diagnosis_history });
                } catch (error) {
                    return patient;
                }
            } else {
                try {
                    therapist = await createTherapist({ user_id: createdUserId, experience_years: experience_years, specialty: specialty,});
                } catch (error) {
                    return therapist;
                }
            }

            // User created
            return { status: 201, message: 'User created successfully' };
        }
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
