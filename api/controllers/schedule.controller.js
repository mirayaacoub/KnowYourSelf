const {
    createSchedule,
    getScheduleByTherapist,
    bookSchedule,
    cancelBooking,
    deleteSchedule
} = require('../services/schedule.service');
require('dotenv').config();

const createScheduleController = async (req, res) => {
    const { schedule } = req.body;
    if (!schedule) {
        console.log(schedule);
        return res.status(400).json({ message: 'missing data' });
    }
    const result = await createSchedule(schedule);
    if (result.status === 201) {
        return res.status(201).json({ message: result.message });
    } else if (result.status === 409) {
        return res.status(409).json({ message: result.message });
    }
    return res.status(500).jon({ message: result.message });
}

const getScheduleByTherapistController = async (req, res) => {
    const therapistId = req.query.therapistId;
    console.log(therapistId);
    const result = await getScheduleByTherapist(therapistId);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message, schedule: result.schedule })
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    return res.status(500).json({ message: result.message });
}

const bookScheduleController = async (req, res) => {
    const { schedule } = req.body;
    if (!schedule) {
        return res.status(400).json({ message: 'missing data' });
    }
    const result = await bookSchedule(schedule);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message });
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message })
    }
    return res.status(500).json({ message: result.message });

}

const cancelBookingController = async (req, res) => {
    const { schedule_id } = req.body;
    let result = await cancelBooking(schedule_id);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message });
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message })
    }
    return res.status(500).json({ message: result.message });

}

const deleteScheduleController = async (req, res) => {
    const { schedule_id } = req.body;
    let result = await deleteSchedule(schedule_id);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message });
    }
    return res.status(500).json({ message: result.message });
}

module.exports = {
    createScheduleController,
    getScheduleByTherapistController,
    bookScheduleController,
    cancelBookingController,
    deleteScheduleController
}