const express = require('express');
const {createTherapistController, getTherapistController, updateTherapistController} = require('../controllers/therapist.controller')
const router = express.Router();

router.post('/', createTherapistController);
router.get('/', getTherapistController);
router.put('/', updateTherapistController);
module.exports = router;