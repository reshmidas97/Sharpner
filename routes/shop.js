const express = require('express');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/', productController.getShopPage);

module.exports = router;