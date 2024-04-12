const express = require('express');
const {
    createScheduleController,
    getScheduleByTherapistController,
    bookScheduleController,
    cancelBookingController,
    deleteScheduleController
} = require('../controllers/schedule.controller');
const router = express.Router();

router.post('/', createScheduleController);
router.get('/', getScheduleByTherapistController);
router.put('/', bookScheduleController);
router.put('/cancel', cancelBookingController);
router.delete('/', deleteScheduleController);

module.exports = router;
