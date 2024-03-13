const express = require('express');
const {createTherapistController, getTherapistController} = require('../controllers/therapist.controller')
const router = express.Router();

router.post('/', createTherapistController);
router.get('/', getTherapistController);
module.exports = router;