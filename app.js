const express = require('express');
const path = require('path');
const { mongoConnect, getDb } = require('./utils/database');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const adminRoutes = require('./routes/admin/adminRoutes');
const userRoutes = require('./routes/user/userRoutes');


const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(routes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


mongoConnect(app.listen(process.env.PORT));


