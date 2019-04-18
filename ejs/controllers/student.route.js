const express = require('express')
const router = express.Router()

const { Student, arrStudent } = require('../models/Student')

router.get('/', (req, res) => {
    res.render('list', { arrStudent })
})

router.get('/demo', (req, res) => {
    res.render('demo')
})

router.get('/add', (req, res) => {
    res.render('add')
})

//yarn add body-parser
router.post('/add-student', (req, res) => {
    const { txtName, txtAvatar, txtLink } = req.body
    const id = Math.floor(Math.random() * 1000)
    const student = new Student(id, txtName, txtAvatar, txtLink)
    arrStudent.push(student)
    res.redirect('/')
})

module.exports = router
