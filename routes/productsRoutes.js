const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)

router.get('/:id', ProductController.getProduct)

router.post('/remove/:id', ProductController.removeProduct)

module.exports = router