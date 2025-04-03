require('dotenv').config()

const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// Connect to database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running on PORT", process.env.PORT);
    })
})
.catch((err) => {
    console.log(err);
})