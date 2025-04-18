const express = require('express');
const router = express.Router();

const { getAllPoems, getPoem, deletePoem } = require('../controllers/PoemController');

// GET poem
router.get("/", getAllPoems);
router.get("/:poem_id", getPoem);
router.delete("/delete/:poem_id", deletePoem);

module.exports = router;