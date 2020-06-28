const router = require('express').Router()

router.use('/api', require('/gBooks.js'))

module.exports = router