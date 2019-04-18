const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) //string||array

const routerSudent = require('./controllers/student.route')
app.use('/', routerSudent)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started at ' + port)
})