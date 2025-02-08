const express = require('express');
const { registerExit } = require('../controllers/exitController');

const router = express.Router();

router.post('/', registerExit);

module.exports = router;
