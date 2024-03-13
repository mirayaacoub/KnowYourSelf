const { createTherapist, getTherapist } = require('../services/therapist.service');
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
    const therapist = req.body;

    if (!therapist) {
        return res.status(401).json({ message: "Missing data" })
    }
    const result = await getTherapist(therapist.therapist);
    if (result.status === 200) {
        console.log(result.message, result.therapist);
        return res.status(200).json({ message: result.message, therapist: result.therapist })
    }
    console.log(result.message);
    return res.status(401).json({ message: result.message });
}

module.exports = {
    getTherapistController, 
    createTherapistController,
}