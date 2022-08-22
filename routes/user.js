const express = require('express')
const app = express()
const router = express.Router()

const User = require('../models/user.models')

app.use(express.json())

router.get('/',async(req, res) =>{
    try{
        const user = await User.find()
        res.json(user)
        //res.send(items)
    }catch(err){
        res.send('Err' + err)
    }
})

router.post('/', async(req, res) =>{
    const user = new User({
        firstName: req.body.firstName,
        surName: req.body.surName,
        gender: req.body.gender,
        dateOfBirthDay: req.body.dateOfBirthDay,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    })
    try{
        const response = await user.save()
        res.json(response)
        //res.send(response)
    }catch(err){
        res.send('Err' + err)
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send(err)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const user = await User.findById(req.params.id)
       const response = await user.remove()
       res.json(response)
    }catch(err){
        res.send(err)
    }
})

router.put('/:id', async(req, res) =>{
    try{
       const user = await User.findById(req.params.id)
       user.firstName = req.body.firstName,
       user.surName = req.body.surName,
       user.gender = req.body.gender,
       user.dateOfBirthDay = req.body.dateOfBirthDay,
       user.password = req.body.password,
       user.phoneNumber = req.body.phoneNumber,
       user.email = req.body.email

       const response = await user.save()
       res.json(response)
    }catch(err){
        res.send(err)
    }
})

module.exports = router