const { createTherapist, getTherapist, getAllTherapists, updateTherapist, getTherapistById } = require('../services/therapist.service');
require('dotenv').config();

const createTherapistController = async (req, res) => {
    const { therapist } = req.body;
    if (!therapist) {
        console.log(therapist)
        return res.status(400).json({ message: "missing data" });
    }
    const result = await createTherapist(therapist);
    // therapist successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: result.message, therapist: result.therapist })
    }
    if (result.status === 409) {
        return res.status(409).json({ message: result.message });
    }
    res.status(500).json({ message: result.message });
}

const getAllTherapistsController = async (req, res) => {
    const result = await getAllTherapists();
    if (!result) {
        return res.status(400).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.therapist);
        return res.status(200).json({ message: result.message, therapist: result.therapist })
    }
    console.log(result.message);
    return res.status(500).json({ message: result.message });
}

const getTherapistController = async (req, res) => {
    // const { user_id } = req.body;
    const user_id = req.query.id;
    const result = await getTherapist({ user_id: user_id});
    if (!result) {
        return res.status(400).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.therapist);
        return res.status(200).json({ message: result.message, therapist: result.therapist })
    }
    if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    console.log(result.message);
    return res.status(500).json({ message: result.message });
}

const getTherapistByIdController = async (req, res) => {
    // const { user_id } = req.body;
    const therapist_id = req.query.id;
    const result = await getTherapistById({ therapist_id: therapist_id});
    if (!result) {
        return res.status(400).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.therapist);
        return res.status(200).json({ message: result.message, therapist: result.therapist })
    }
    if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    console.log(result.message);
    return res.status(500).json({ message: result.message });
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
    getAllTherapistsController,
    createTherapistController,
    getTherapistByIdController,
    updateTherapistController
}