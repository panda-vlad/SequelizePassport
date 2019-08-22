
const express = require('express');

const authController = require('../controllers/authcontoller');

const router = express.Router();

router.get('/signup', authController.signUp)
router.get('/signin', authController.signIn)

module.exports = router;