const express = require('express')
const { requireToken } = require('../config/auth')
const Customer = require('../models/customer')


const router = express.Router()

//create print
router.post('/prints', requireToken, (req, res, next) => {
    const customerId = req.body.print.customerId
    const print = req.body.print
    Customer.findById(customerId)
    .then((customer) => {
        customer.prints.push(print)
        return customer.save()
    })
    .then((customer) => res.status(204).json({customer: customer}))
    .catch(next)
})


router.patch('/prints/:printId', requireToken, (req, res, next) => {
    const customerId = req.body.print.customerId
    const printBody = req.body.print
    Customer.findById(customerId)
    .then((customer) => {
        const print = customer.prints.id(req.params.printId)
        print.set(printBody)
        return customer.save()
    })
    .then((customer) => res.status(204).json({customer: customer}))
    .catch(next)
})


router.delete('/prints/:printId/:customerId', requireToken,  (req, res, next) => {
    const customerId = req.params.customerId
    console.log(customerId)
    Customer.findById(customerId)
    .then((customer) => {
        customer.prints.id(req.params.printId).remove()
        return customer.save()
    })
    .then(() => res.status(204))
    .catch(next)
})


module.exports = router