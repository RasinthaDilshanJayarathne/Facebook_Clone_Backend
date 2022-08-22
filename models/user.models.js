const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirthDay:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('user',usersSchema)