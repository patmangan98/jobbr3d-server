const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const db = require('./config/db')
const PORT = 9001

//require the routes
const customerRoutes = require('./routes/customer-routes')
const printRoutes = require('./routes/print-routes')
//user routes

//setting up mongoose

mongoose.set('strictQuery', true)

mongoose.connect(db)
// mongoose.connect(db,  {
//     useNewUrlParser: true, 
//     useUnifiedToplogy: true, 
// })

const app = express()
//add cors here
app.use(express.json())

app.use(customerRoutes)
//add user routes
app.use(printRoutes)

app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})
module.exports = app