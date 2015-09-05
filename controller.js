/*
 * Master Controller -
 *
 * @module :: Controller
 * @description ::
 *
 */

module.exports = exports;

exports.index = function(req, res) {
  res.status(200)
  res.render('') // Path to the index template
                 // Bring in injection later
}

exports.treatment = function(req, res)
{ // Grabbing `id` from URL ...
  res.status(200)
  res.render('') // Path to the treatment template
                 // Bring in injection later
}

exports.map = function(req, res) {
  res.status(200)
  res.render('') // Path to the treatment template
                 // Bring in injection later
}

exports.SOMEARGUMENT = function(req, res) {
  res.status(200)
  res.render('') // Path to the treatment template
                 // Bring in injection later
}

exports.statusNotFound = function(req, res) {
  res.status(404)
  res.send('page not found')
  res.next()
}

exports.statusInternalServerError = function(err, req, res) {
  res.status(err || 500)
  res.send('page not found')
  res.next()
}