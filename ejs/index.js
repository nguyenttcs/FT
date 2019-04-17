const express = require('express')
const app = express()
app.set('view engine','ejs')

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

const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log('Server started at ' + port)
})