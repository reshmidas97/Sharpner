const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended : false}));

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
});

router.post('/success', (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.email);
    res.sendFile(path.join(__dirname, '../', 'views', 'submit-success.html'));
});

module.exports = router;