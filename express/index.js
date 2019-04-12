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

 const port = process.env.PORT||3000
 app.listen(port,()=>{
     console.log("Server started on port "+port)
 })