/**
 * npm install yarn -g
 * yarn -v
 * 
 * yarn init -y
 * yarn add express ejs
 */

 const express = require('express')
 const ejs = require('ejs')

 const app = express()

 app.get('/',(req,res)=>{
     res.send({
         name:"Nguyen",
         height: 160
     })
 })

 app.get('/user/:id',(req,res)=>{
     const id = req.params.id
     const type = typeof id
     res.send({
         id,
         type
     })
 })

 app.get('/a',(req,res)=>{
    //res.sendStatus(404)
    //console.log(__dirname);
    res.sendFile(__dirname+'/views/a.html');
})

 const port = process.env.PORT||3000
 app.listen(port,()=>{
     console.log("Server started on port "+port)
 })