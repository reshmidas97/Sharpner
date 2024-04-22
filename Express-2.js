const express = require('express');
const app = express();
const path = require('path');

const admin = require('./routes/admin');
const shop = require('./routes/shop');
const contact = require('./routes/contact-us');

app.use(admin);
app.use(shop);
app.use(contact);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);