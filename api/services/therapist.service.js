const { Therapist } = require('../models/therapist.model');

const getTherapist = async (data) => {
    const { userId } = data;

    try {
        const therapist = await Therapist.findOne({ where: { user_id: userId } });
        if (therapist) {
            return { status: 200, message: "Therapist found", therapist: therapist }
        }
        else {
            return { status: 404, message: "Not found" }
        }
    } catch (error) {
        return { status: 500, message: "Internal server error" }
    }

}

const createTherapist = async (data) => {
    const { userId, speciality, experience } = data;

    try {
        const therapist = await Therapist.create({ speciality: speciality, experience_years: experience, user_id: userId });
        if (therapist) {
            return { status: 200, message: "Therapist created successfully" }
        }
    } catch(error){
        if (error.name === 'SequelizeUniqueConstraintError') {
            return { status: 409, message: 'Therapist already exists' };
        }
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

module.exports = {
    getTherapist,
    createTherapist,
}