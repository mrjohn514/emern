const express = require('express')
const router = express.Router()

const productcontroller = require('../controllers/product')

router.get('/search', productcontroller.getproducts)
router.post('/addproduct', productcontroller.addproduct)
router.get('/allimages', productcontroller.getimages)

module.exports = router
