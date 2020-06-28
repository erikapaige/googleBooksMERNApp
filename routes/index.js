const router = require('express').Router()

router.use('/api', require('./dbBookRoutes'))
router.use('/api', require('./gBooksRoutes'))

module.exports = router