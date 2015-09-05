var express = require('express'),
    router  = require('./routes'),
    path    = require('path')


var app = module.exports = express()

app.set('/views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(router)
