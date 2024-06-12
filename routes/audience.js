// routes/audience.js
const express = require('express');
const router = express.Router();
const audienceController = require('./audienceController');

router.post('/create', audienceController.createAudience);

module.exports = router;
