/*
 * Master Controller -
 *
 * @module :: Controller
 * @description ::
 *
 * Add a path to the file & inject meta data later
 */

module.exports = exports;

exports.index = function(req, res) {
  res.status(200)
  res.render('index') // Path to the index template
                      // Bring in injection later
}

exports.treatment = function(req, res)
{ // Grabbing `id` from URL ...
  res.status(200)
  res.render('treatment')
}

exports.map = function(req, res) {
  res.status(200)
  res.render('map')
}

// exports.SOMEARGUMENT = function(req, res) {
//  res.status(200)
//  res.render('')
// }

exports.statusNotFound = function(req, res) {
  res.status(404)
  res.render('404')
  res.next()
}

exports.statusInternalServerError = function(err, req, res) {
  res.status(err || 500)
  res.render('500')
  res.next()
}