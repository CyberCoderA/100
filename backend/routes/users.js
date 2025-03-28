const express = require('express')
const app = express()
const router = express.Router()


router.get("/", (req, res) => {
    console.log('Here')
    res.send('Hi')
})

module.exports = router