require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const poemRouter = require('./routes/poems');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/users', userRouter);
app.use('/poems', poemRouter);

// Connect to database
mongoose.connect("mongodb+srv://adrianpueblo27:ewDj9aHauht92FRE@cluster0.gutnjzz.mongodb.net/100_poem?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running on PORT", process.env.PORT);
    })
})
.catch((err) => {
    console.log(err);
})