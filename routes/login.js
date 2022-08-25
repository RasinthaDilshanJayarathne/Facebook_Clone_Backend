const express = require('express')
const app = express()
const router = express.Router()

const Login = require('../models/login.models')

app.use(express.json())

router.post('/', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const login = await Login.find();

    for (const i of login) {
        if (email == i.email && password === i.password) {
            res.json(i);

        } else {
            res.send("Incorrect Email OR password.....!");
        }
    }
})

module.exports = router