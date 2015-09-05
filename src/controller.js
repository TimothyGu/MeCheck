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

exports.search = function(req, res) {
  res.status(200)
  
  var param = req.query.q,
      regex = new RegExp(escapeRegex(param).replace(/ /g, '.*'), 'i')
  
  Model.find({ 'name': regex }, function(err, result) {
    if (!err) res.json(result)
  })
}

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
