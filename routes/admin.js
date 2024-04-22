const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require('../controllers/product');

router.get('/add-product', productController.getAddProducts);

router.post('/add-product', productController.postAddProducts);

module.exports = router;