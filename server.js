const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const db = require('./config/db')
const port = 9001

//require the routes
const customerRoutes = require('./routes/customer-routes')
