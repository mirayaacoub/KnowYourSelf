const express = require('express');
const { createTherapistController,
    getTherapistController,
    updateTherapistController,
    getAllTherapistsController,
    getTherapistByIdController
} = require('../controllers/therapist.controller');
const router = express.Router();

router.post('/', createTherapistController);
router.get('/', getTherapistController);
router.get('/all', getAllTherapistsController);
router.get('/id', getTherapistByIdController);
router.put('/', updateTherapistController);
module.exports = router;