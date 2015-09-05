var express    = require('express'),
    router     = require('./routes'),
    mongoose   = require('mongoose'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    path       = require('path')


var app = module.exports = express()

try {
  mongoose.connect('mongodb://localhost:27017/pennapps-fall-2015')
} catch(e) {
  console.log(e)
}

app.set('/views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)
