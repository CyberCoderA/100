const express = require('express')
const router = express.Router()

const { getAllPoems, getPoem } = require('../controllers/PoemController')

// GET poem
router.get("/", getAllPoems);
router.get("/:poem_id", getPoem);

module.exports = router;