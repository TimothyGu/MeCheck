var router = module.exports = require('express').Router(),
    controller = require('./controller')

router.get('/', controller.index)
router.get('/treatment/:id', controller.treatment)
router.get('/map', controller.map)
router.use(controller.statusNotFound)
router.use(controller.statusInternalServerError)
