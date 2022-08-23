const express = require('express')
const app = express()
const router = express.Router()

const Login = require('../models/login.models')

app.use(express.json())

router.post('/', async(req, res) =>{
    const login = new Login({
        email: req.body.email,
        password: req.body.password
    })
    try{
       
    }catch(err){
        res.send(err)
    }
})

router.get('/',async(req, res) =>{
    try{
        const login = await Login.find()
        res.json(login)
    }catch(err){
        res.send('Err' + err)
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const login = await Login.findById(req.params.id)
        res.json(login)
    }catch(err){
        res.send(err)
    }
})

module.exports = router