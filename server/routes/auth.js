const express = require('express');
const authController = require('../controllers/authController.js');
const router = express.Router();


router.post('/login', authController.login);
//stubby wubby
router.get('/', (req, res) => res.send('auth'));
router.post('/register', authController.register);

module.exports = router;
