const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<html><head><title>Log In Page</title></head><body><form action = "/chat" method = "POST">Enter username : <input type = "text" name = "username"><button type = "submit"> Log In </button></form></body></html>');

    //res.session.username = req.body.username
});

module.exports = router;