var express  = require('express'),
    router   = require('./routes'),
    mongoose = require('mongoose'),
    path     = require('path')


var app = module.exports = express()

app.set('/views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

try {

  // Connect to the database
  mongoose.connect('mongodb://localhost:27017/pennapps-fall-2015')

} catch(e) {
  console.log(e)
}

app.use(router)
