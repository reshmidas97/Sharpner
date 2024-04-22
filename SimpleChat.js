const express = require('express');
const app = express();
const fs = require('fs');
const session = require('express-session');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

const login = require('./chat/login');
const chat = require('./chat/chat.js');

// Set up session middleware
app.use(session({
    secret: 'chat-key', // Change this to a secure secret
    resave: false,
    saveUninitialized: true
}));

app.use(login);
app.use(chat);

app.post('/', (req, res, next) => {

    const username = req.session.username; // Get username from session
    const msg = req.body.msg;

    const chatMsg = `${username}: ${msg}\n`;
    fs.appendFile('chat.txt', `${chatMsg}`, (err) => {
        if (err) {
            console.error('Error appending to chat.txt:', err);
            // Handle the error, e.g., send an error response to the client
            res.status(500).send('Error appending to chat.txt');
        } else {
            // Append operation completed successfully
            console.log('Message appended to chat.txt');
            // Optionally, redirect or send a response indicating success
            res.redirect('/chat');
        }
    });
});

app.listen(3000);