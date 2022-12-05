const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');


// import routes
const route = require('./routes');
const db = require('./config/db');

db.connect();

const port = 3000;
const app = express();

// use static folder
app.use(express.static(path.join(__dirname, 'public')));

// Midleware

// Post data from a form
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Post data from a JSON
app.use(express.json());

// HTTP log
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs', // set file.handlebars -> file.hbs
    }),
);
app.set('view engine', 'hbs');

// Chỉ đường dẫn tới file
app.set('views', path.join(__dirname, 'resources','views')); // ~'resources/views'

// Home, search
// route init
route(app);

//
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});