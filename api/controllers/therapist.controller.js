const { createTherapist, getTherapist, updateTherapist } = require('../services/therapist.service');
require('dotenv').config();

const createTherapistController = async (req, res) => {
    const { therapist } = req.body;
    if (!therapist) {
        console.log(therapist)
        return res.status(401).json({ message: "missing data" });
    }
    const result = await createTherapist(therapist);
    // user successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: "successful", therapist: result.therapist })
    }
    res.status(401).json({ message: result.message });
    //inappropriate request
    //res.status(401).json({ message: "Unauthorized" });
}

const getTherapistController = async (req, res) => {
    const { user_id } = req.body;
    const result = await getTherapist({ user_id: user_id });
    if (!result) {
        return res.status(401).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.therapist);
        return res.status(200).json({ message: result.message, therapist: result.therapist })
    }
    console.log(result.message);
    return res.status(401).json({ message: result.message });
}

const updateTherapistController = async (req, res) => {
    const { therapist } = req.body;
    if (!therapist) {
        return res.status(400).json({ message: "Missing data" });
    }
    try {
        const result = await updateTherapist(therapist);
        if (result.status === 200) {
            return res.status(200).json({ message: "Therapist updated successfully" });
        } else if (result.status === 404) {
            return res.status(404).json({ message: "Therapist not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getTherapistController,
    createTherapistController,
    updateTherapistController
}