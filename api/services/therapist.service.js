const { Therapist } = require('../models/therapist.model');

const createTherapist = async (data) => {
    const { user_id, specialty, experience_years } = data;

    try {
        const therapist = await Therapist.create({ specialty: specialty, experience_years: experience_years, user_id: user_id });
        if (therapist) {
            return { status: 201, message: "Therapist created successfully", therapist: therapist }
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return { status: 409, message: 'Therapist already exists' };
        }
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

const getTherapist = async (data) => {
    const { user_id } = data;
    try {
        const therapist = await Therapist.findOne({ where: { user_id: user_id } });
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

const updateTherapist = async (data) => {
    const { user_id, specialty, experience_years } = data;
    try {
        const therapist = await Therapist.findOne({ where: { user_id: user_id } });
        if (therapist) {
            await therapist.update({ specialty: specialty, experience_years: experience_years });
            return { status: 200, message: "Therapist updated successfully" };
        } else {
            return { status: 404, message: "Therapist not found" };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

module.exports = {
    getTherapist,
    createTherapist,
    updateTherapist
}