const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({entended : false}));

app.use('/add-product', (req, res, next) => {
    res.send('<html><head><title>Product</title></head><body><form action = "/product" method = "POST">Enter item : <input type = "text" name = "item"><br>Enter item size : <input type = "text" name = "size"><br><button type = "submit">Send</button></body></html>');
    //res.redirect('/product');
});

app.use('/product', (req, res, next) => {
    console.log(req.body.item);
    console.log(req.body.size);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<html><head><title>Welcome</title></head><body><h1>Welcome</h1></body></html>');
    //res.redirect('/add-product');
});

app.listen(3000);