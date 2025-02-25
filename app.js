const express = require('express');
const path = require('path');
const { mongoConnect, getDb } = require('./utils/database');
const bodyParser = require('body-parser');



const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/routes');



app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


mongoConnect(app.listen(process.env.PORT));


