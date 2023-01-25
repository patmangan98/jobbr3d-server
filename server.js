const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const db = require('./config/db')
const port = 9001

//require the routes
const customerRoutes = require('./routes/customer-routes')
//print routes
//user routes

//setting up mongoose

mongoose.set('strictQuery', true)
mongoose.connect(db,  {
    useNewUrlParser: true, 
    useUnifiedToplogy: true, 
})

const app = express()
//add cors here
app.use(express.json())

app.use(customerRoutes)
//add user routes
//add print routes
app.listen(PORT = () => {
    console.log(`listening on port ${PORT}`)
})
module.exports = app