const express = require('express');
const { createTherapistController,
    getTherapistController,
    updateTherapistController,
    getAllTherapistsController
} = require('../controllers/therapist.controller');
const router = express.Router();

router.post('/', createTherapistController);
router.get('/', getTherapistController);
router.get('/all', getAllTherapistsController);
router.put('/', updateTherapistController);
module.exports = router;