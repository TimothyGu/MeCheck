var mongoose = require('mongoose')

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId
 
var Test = new Schema({
  id: ObjectId,
  name: String
}, { collection: 'test' })

module.exports = mongoose.model('Test', Test)