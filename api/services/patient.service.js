const { Patient } = require('../models/patient.model');


const createPatient = async (data) => {
    const { user_id, diagnosis_history } = data;
    try {
        const patient = await Patient.create({ diagnosis_history: diagnosis_history, user_id: user_id });
        if (patient) {
            return { status: 200, message: "Patient created successfully" }
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return { status: 409, message: 'Patient already exists' };
        }
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

const getPatient = async (data) => {
    const { user_id } = data;
    try {
        const patient = await Patient.findOne({ where: { user_id: user_id } });
        if (patient) {
            return { status: 200, message: "Patient found", patient: patient }
        }
        else {
            return { status: 404, message: "Not found" }
        }
    } catch (error) {
        return { status: 500, message: "Internal server error" }
    }

}

const updatePatient = async (data) => {
    const { diagnosis_history, user_id } = data;
    try {
        const patient = await Patient.findOne({ where: { user_id } });

        if (patient) {
            await patient.update({ diagnosis_history });
            return { status: 200, message: 'Patient updated successfully.' };
        } else {
            return { status: 404, message: 'Patient not found.' };
        }
    } catch (error) {
        console.error('Error updating diagnosis:', error);
        return { status: 500, message: 'An error occurred while updating diagnosis.' };
    }
}

module.exports = {
    getPatient,
    createPatient,
    updatePatient
}