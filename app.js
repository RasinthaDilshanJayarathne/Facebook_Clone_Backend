const express = require('express')
const mongoose = require('mongoose')

const user = require ('./routes/user')
const login = require ('./routes/login')
const post = require ('./routes/post')

const app = express()
const port = 4000

app.use(express.json())

app.use('/user', user)
app.use('/login', login)
app.use('/post', post)

const url = 'mongodb://127.0.0.1/facebook_clone'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})