const express = require('express');
const { authenticateController } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/authenticate', authenticateController);
module.exports = router;