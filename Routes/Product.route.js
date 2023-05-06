
const express = require('express')
const { CartdeletesingleProduct, CartPostProduct,CartupdateProduct,CartgetProduct,CartdeleteProduct } = require('../Controllers/Product.controller')
const { Auth } = require('../Middleware/Auth')
const productRouter= express.Router()

productRouter.post('/',Auth,CartPostProduct)
productRouter.get('/',Auth,CartgetProduct)
productRouter.patch('/:id',Auth,CartupdateProduct)
productRouter.delete('/',Auth,CartdeleteProduct)
productRouter.delete('/:id',Auth,CartdeletesingleProduct)





module.exports={
    productRouter
}