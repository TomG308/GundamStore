const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/gundamstore', { useNewUrlParser: true }, () => {
    // if (err) throw err
    console.log('connected to the database')
})

// -------------------connect routes -------------

app.listen(9000, () => {
    console.log('this server is running on port 9000')
})