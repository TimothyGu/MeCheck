var mongoose = require('mongoose')

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId
 
var Query = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  treatment: String
}, { collection: 'illness' })

module.exports = mongoose.model('Query', Query)
