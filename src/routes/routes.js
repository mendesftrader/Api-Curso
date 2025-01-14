const router = require('express').Router()

const ProductsController = require('../controllers/methods')

router.get('/products/:id?', ProductsController.get)
//router.post('/products', ProductsController.post)
//router.put('/products', ProductsController.put)
//router.delete('/products', ProductsController.delete)

module.exports = router