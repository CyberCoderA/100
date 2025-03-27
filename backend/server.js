const cors = require(cors)

const express = require('express')
const app = express()

const PORT = 3000

// Middleware
app.use(express.json())
app.use(cors())

app.use((req, res) => {
    console.log(req.path, req.method)
    next()
})

app.listen(PORT)