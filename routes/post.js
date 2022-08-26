const express = require('express')
const app = express()
const router = express.Router()
var bodyParser = require('body-parser')



const Post = require('../models/post.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.send('Err' + err)
    }
})

app.use(bodyParser.urlencoded({ extended: true }))

router.post('/', function (req, res){

    const post = new Post({
        userId: req.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    })
    const response = post.save()
    console.log(req.body);
    console.log(post.toJSON);
    // res.json(response)
    res.send('Successfully')
})

// router.post('/', async (req, res) => {
//     const post = new Post({
//         userId: req.body.userId,
//         date: req.body.date,
//         time: req.body.time,
//         title: req.body.title,
//         body: req.body.body
//     })
//     try {
//         const response = await post.save()
//         res.json(response)
//     } catch (err) {
//         res.send('Err' + err)
//     }
// })

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    } catch (err) {
        res.send(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.userId = req.body.userId,
            post.date = req.body.date,
            post.time = req.body.time,
            post.title = req.body.title,
            post.body = req.body.body

        const response = await post.save()
        res.json(response)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router