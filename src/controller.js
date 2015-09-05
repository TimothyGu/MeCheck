/*
 * Master Controller -
 *
 * @module      :: Controller
 * @description :: Main Application Controller
 */

var Model       = require('./schema.js'),
    escapeRegex = require('escape-string-regexp')

exports.index = function(req, res) {
  res.status(200)
  res.render('index')
}

/*
 * On the user's request, grab the form input from the
 * client and escape using a regular expression, finally,
 * store in a variable called `regex`. Pass `regex` into a
 * query string that queries the MongoDB database. Then return
 * all the objects to template.
 */

exports.search = function(req, res) {
  res.status(200)
  
  var param = req.query.q,
      regex = new RegExp(escapeRegex(param).replace(/ /g, '.*'), 'i')
  
  Model.find({ 'name': regex }, function(err, result) {
    if (!err) res.render('search', { objects: result })
  })
}

/*
 * On the user's request, grab the object with ID that matches
 * the previously selected object. Then return the single object
 * to the template.
 */

exports.treatment = function(req, res) {
  res.status(200)

  var param = req.params.id

  Model.findOne({ '_id': param }, function(err, result) {
    if (!err) res.render('treatment', { object: result })
  })
}

exports.map = function(req, res) {
  res.status(200)
  res.render('map')
}

exports.statusNotFound = function(req, res, next) {
  res.status(404)
  res.render('404')
  next()
}

exports.statusInternalServerError = function(err, req, res, next) {
  res.status(err || 500)
  res.render('500')
  next()
}
