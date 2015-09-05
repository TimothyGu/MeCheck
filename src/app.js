var express    = require('express'),
    router     = require('./routes'),
    mongoose   = require('mongoose'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    path       = require('path'),
    fs         = require('fs')

var GOOGLE_API_KEY = fs.readFileSync('google-key', 'utf8').trim()

var app = module.exports = express()
app.locals.GOOGLE_API_KEY = GOOGLE_API_KEY

try {
  mongoose.connect('mongodb://45.79.167.179:27017/pennapps-fall-2015')
} catch(e) {
  console.log(e)
}

app.use(express.static(path.join(__dirname, "../static")))

app.set('/views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)
