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

app.get('/:so_a/:tenpheptinh/:so_b',(req,res)=>{
    const {so_a,so_b,tenpheptinh} = req.params
    const tinh = new Tinh(so_a,tenpheptinh,so_b)
    res.send(tinh.getResult())
})

class Tinh{
    constructor(so_a,tenpheptinh,so_b){
        this.so_a = so_a
        this.so_b = so_b
        this.tenpheptinh=tenpheptinh
    }

    get pheptinh(){
        if(this.tenpheptinh=='cong') return '+'
        else if(this.tenpheptinh=='tru') return '-'
        else if(this.tenpheptinh=='nhan') return '*'
        return '/'
    }

    getResult(){
        const result = `${this.so_a} ${this.pheptinh} ${this.so_b}`
        return `${result} = ${eval(result)}`
re
    }
}

 const port = process.env.PORT||3000
 app.listen(port,()=>{
     console.log("Server started on port "+port)
 })