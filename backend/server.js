const express = require('express')
const app = express()

const PORT = 3000

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(process.env.PORT)