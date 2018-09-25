const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})

mongoose.connect('mongodb://localhost:27017/gundamStore' ,{ useNewUrlParser: true }, (err) => {
    if (err) throw err
    console.log('connected to the database')
})

// -------------------connect routes -------------
app.use('/gundams', require('./routes/gundams'))

app.listen(9000, () => {
    console.log('this server is running on port 9000')
})