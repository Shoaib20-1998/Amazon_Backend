const express = require('express')
const { Auth } = require('../Middleware/Auth')
const { Bookorder, Getorder } = require('../Controllers/orderhistory.controller')
const { OrderAuth } = require('../Middleware/Orderauth')
const orderRouter= express.Router()

orderRouter.post('/',OrderAuth,Bookorder)
orderRouter.get('/',Auth,Getorder)


module.exports={
    orderRouter
}