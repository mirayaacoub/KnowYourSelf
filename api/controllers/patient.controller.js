const { createPatient, getPatient, updatePatient } = require('../services/patient.service');
require('dotenv').config();

const createPatientController = async (req, res) => {
    const { patient } = req.body;
    if (!patient) {
        console.log(patient)
        return res.status(400).json({ message: "missing data" });
    }
    const result = await createPatient(patient);
    // therapist successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: result.message, patient: result.patient })
    }
    if (result.status === 409) {
        return res.status(409).json({ message: result.message });
    }
    res.status(500).json({ message: result.message });
}

const getPatientController = async (req, res) => {
    const user_id = req.query.id;
    const result = await getPatient({ user_id: user_id });
    if (!result) {
        return res.status(400).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.patient);
        return res.status(200).json({ message: result.message, patient: result.patient })
    }
    else if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    console.log(result.message);
    return res.status(500).json({ message: result.message });
}


const updatePatientController = async (req, res) => {
    const { patient } = req.body;
    try {
        const result = await updatePatient(patient);
        if (result.status === 200) {
            return res.status(200).json({ message: result.message });
        } else if (result.status === 404) {
            return res.status(404).json({ message: result.message});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: result.message });
    }

};

module.exports = {
    getPatientController,
    createPatientController,
    updatePatientController
}