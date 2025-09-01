const express = require('express')
const cors = require('cors') //security feature
const app = express()
app.use(cors())

const bodyparser = require('body-parser')
const userRoutes = require('./routes/routeDemo')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/user',userRoutes)


module.exports = app

