const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// When user goes to GET /, show login page
router.get('/', authController.getLoginPage);

// When user submits the POST form, process login
router.post('/login', authController.processLogin);

module.exports = router;
