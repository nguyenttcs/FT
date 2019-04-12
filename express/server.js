const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/file',(req,res)=>{
    const number = 12
    res.render('b',{number})
})

const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log('Server started on port '+port)
})

