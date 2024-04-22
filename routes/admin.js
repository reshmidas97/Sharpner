const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended : false}));

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.item);
    console.log(req.body.size);
    res.redirect('/');
});

module.exports = router;