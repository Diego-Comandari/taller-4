const express = require('express');
const { getHealth, getInfo } = require('../controllers/apiController');

const router = express.Router();

router.get('/health', getHealth);
router.get('/info', getInfo);

module.exports = router;
