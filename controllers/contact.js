const express = require('express');
const path = require('path');
const router = express.Router();

exports.getContactInfo = (req, res, next) => 
{
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
};

exports.postContactInfo = (req, res, next) => 
{
    res.sendFile(path.join(__dirname, '../', 'views', 'file-submit.html'));
};