var mongoose = require('mongoose')

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId

var Log_User_Account = new Schema({
  id: ObjectId,
  search_value: String,
  lat: String,
  lon: String
}, { collection: 'users' })

module.exports = mongoose.model('Insert', Log_User_Account)
