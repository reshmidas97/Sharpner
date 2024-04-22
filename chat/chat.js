const express = require('express');
const fs = require('fs');
const session = require('express-session');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : false}));

router.use(session({
    secret: 'chat-key',
    resave: false,
    saveUninitialized: true
}));

//for both get and post
router.use('/chat', (req, res, next) => 
{
    const data = fs.readFileSync('chat.txt');
    let messages = data ? data.toString().split('\n') : [];

    let html = '<html>';
        html += '<head><title>Chat Room</title></head>';
        html += '<body>';

        messages.forEach((msg) => 
        {
            if (msg.trim() !== '') 
            {
                html += `<p>${msg}</p>`;
            }
        });

        html += '<form action="/" method="POST">';
        html += 'Enter message : <input type="text" name="msg">';
        html += '<button type="submit"> Send </button>';
        html += '</form>';
        html += '</body>';
        html += '</html>';

        //res.session.username = req.body.username;
        const username = req.body.username;
        req.session.username = username; // Set session variable for the username

        res.send(html); // Send the constructed HTML response
});

module.exports = router;