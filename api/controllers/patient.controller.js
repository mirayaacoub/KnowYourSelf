const { createPatient, getPatient, updatePatient } = require('../services/patient.service');
require('dotenv').config();

const createPatientController = async (req, res) => {
    const { patient } = req.body;
    if (!patient) {
        console.log(patient)
        return res.status(401).json({ message: "missing data" });
    }
    const result = await createPatient(patient);
    // user successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: "successful", patient: result.patient })
    }
    res.status(401).json({ message: result.message });
    //inappropriate request
    //res.status(401).json({ message: "Unauthorized" });
}

const getPatientController = async (req, res) => {
    const { user_id } = req.body;
    const result = await getPatient({ user_id: user_id });
    if (!result) {
        return res.status(401).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.patient);
        return res.status(200).json({ message: result.message, patient: result.patient })
    }
    console.log(result.message);
    return res.status(401).json({ message: result.message });
}


const updatePatientController = async (req, res) => {
    const { diagnosis_history, user_id } = req.body;

    try {
        const result = await updatePatient({ diagnosis_history, user_id });

        if (result.status === 200) {
            // If the update was successful, send a success response
            res.status(200).json({ message: result.message });
        } else {
            // If the update failed, send an error response
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error('Error in updateDiagnosisController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getPatientController,
    createPatientController,
    updatePatientController
}