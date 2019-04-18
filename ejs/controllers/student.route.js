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

router.get('/update/:id', (req, res) => {
    const { id } = req.params
    const student = arrStudent.find(student => student.id == id)
    !student ? res.send('Student not found!') : res.render('update', { student })
})

router.post('/update-student', (req, res) => {
    const { txtId, txtName, txtAvatar, txtLink } = req.body
    let student = arrStudent.find(student => student.id == txtId)
    if (!student) {
        res.send({ error: 'Student not found!' })
    } else {
        student.name = txtName
        student.avatar = txtAvatar
        student.link = txtLink
        res.redirect('/')
    }
})

router.get('/remove/:id', (req, res) => {
    const id = req.params.id
    const student_index = arrStudent.findIndex(student => student.id == id)
    if (student_index < 0) {
        res.send({error:'Student not found!'})
    } else {
        arrStudent.splice(student_index,1)
        res.redirect('/')
    }
})

module.exports = router
