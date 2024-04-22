const express = require('express');
const path = require('path');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : false}));

exports.getShopPage = (req, res, next) => 
{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

exports.getAddProducts = (req, res, next) => 
{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.postAddProducts =  (req, res, next) => 
{
    res.redirect('/');
};