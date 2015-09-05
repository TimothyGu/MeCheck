var mongoose = require('mongoose')

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

var Log_User_Account = new Schema({
  id: ObjectId,
  search_value: String,
  lat: String,
  lon: String
})

module.exports = mongoose.model('Insert', Log_User_Account)
 
var Query = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  treatment: String
}, { collection: 'illness' })

module.exports = mongoose.model('Query', Query)
