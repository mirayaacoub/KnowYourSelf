const express = require('express');
const {createPatientController, getPatientController, updatePatientController} = require('../controllers/patient.controller')
const router = express.Router();

router.post('/', createPatientController);
router.get('/', getPatientController);
router.put('/', updatePatientController);

module.exports = router;