const express = require('express')
const router = express.Router()

const { getUser } = require('../controllers/UserController');

// GET user
router.get("/:user_id", getUser);

module.exports = router;