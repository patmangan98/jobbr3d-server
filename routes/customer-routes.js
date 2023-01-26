const express = require('express')

const Customer = require('../models/customer') 
 
const router = express.Router()
const { requireToken } = require('../config/auth')

//index customers
router.get('/customers', requireToken, (req, res, next) => {
    
    Customer.find(req.user._id)
        .then((customers) => {
            return customers.map((customer) => customer)
        })
    .then((customers) => res.status(200).json({ customers: customers }))
    .catch(next)
})  

//create customer
router.post('/customers', requireToken, (req, res, next) => {
    console.log(req.user)
    const customer = req.body.customer
    customer.owner = req.user._id
    Customer.create(customer)
    .then((customer) => {
        res.status(201).json({customer :customer})
    })
    .catch(next)
})

//show customer 
router.get('/customers/:id', requireToken, (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => res.status(200).json({ customer: customer}))
    .catch(next)
})

//update customer 
router.patch('/customers/:id', requireToken, (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => {
        return customer.updateOne(req.body.customer)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

//delete customer 
router.delete('/customers/:id', requireToken, (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => {
        customer.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router