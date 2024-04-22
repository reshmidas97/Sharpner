const express = require('express');
const router = express.Router();
const path = require('path');

const contactInfo = require('../controllers/contact');
//const bodyParser = require('body-parser');
//router.use(bodyParser.urlencoded({extended : false}));

router.get('/contact-us', contactInfo.getContactInfo);

router.post('/success', contactInfo.postContactInfo);

module.exports = router;