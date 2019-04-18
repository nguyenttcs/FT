const express = require('express')
const app = express()
app.set('view engine','ejs')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //string||array

const {Student, arrStudent} = require('./models/Student')

app.get('/',(req,res)=>{
    res.render('list',{arrStudent})
})

app.get('/demo',(req,res)=>{
    res.render('demo')
})

app.get('/add',(req,res)=>{
    res.render('add')
})

//yarn add body-parser
app.post('/add-student',(req,res)=>{
    const {txtName, txtAvatar, txtLink} = req.body
    const id = Math.floor(Math.random()*1000)
    const student = new Student(id,txtName,txtAvatar,txtLink)
    arrStudent.push(student)
    res.redirect('/')
})

const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log('Server started at ' + port)
})