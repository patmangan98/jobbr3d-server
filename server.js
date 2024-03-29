const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')
const PORT = process.env.PORT || 3000

//require the routes
const customerRoutes = require('./routes/customer-routes')
const printRoutes = require('./routes/print-routes')
const userRoutes = require('./routes/user-routes')
//user routes

//setting up mongoose
mongoose.set('strictQuery', true)

// mongoose.connect(db)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('successful connection') }).catch((e) => {
    console.log('not connected')
})

const corsOptions = {
    origin: 'https://jobbr3d-client.onrender.com',
    optionsSuccessStatus: 200
  };


//this caused issues with my version of mongoose
// mongoose.connect(db,  {
//     useNewUrlParser: true, 
//     useUnifiedToplogy: true, 
// })

const app = express()
// app.use(cors({ origin: process.env.PORT || `http://127.0.0.1:5500` }))

app.use(cors(corsOptions))
app.use(express.json())

app.use(customerRoutes)
app.use(userRoutes)
app.use(printRoutes)

app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})
module.exports = app