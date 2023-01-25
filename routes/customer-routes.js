const express = require('express')

const Customer = require('../models/customer') 

const router = express.Router()

//index customers
router.get('/customers', (req, res, next) => {
    Customer.find()
        .then((customers) => {
            return customers.map((customer) => customer)
        })
    .then((customers) => res.status(200).json({ customers: customers }))
    .catch(next)
})  

//create customer
router.post('/customers', (req, res, next) => {
    Customer.create(req.body.customer)
    .then((customer) => {
        res.status(201).json({customer :customer})
    })
    .catch(next)
})

//show customer 
router.get('/customers/:id', (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => res.status(200).json({ customer: customer}))
    .catch(next)
})

//update customer 
router.patch('/customers/:id', (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => {
        return customer.updateOne(req.body.customer)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

//delete customer 
router.delete('/customers/:id', (req, res, next) => {
    Customer.findById(req.params.id)
    .then((customer) => {
        customer.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router