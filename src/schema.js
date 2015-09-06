var mongoose = require('mongoose')

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId
 
var Illness = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  treatment: [ String ],
  symptoms: [ String ]
}, { collection: 'illness' })

module.exports = mongoose.model('Illness', Illness)
