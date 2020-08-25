// bring in dotenv
require('dotenv').config()
// bring in express
const express = require('express')
const { join } = require('path')

const app = express()

// setup middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// bring in routes
app.use(require('./routes'))

// extra route to re-route to homepage
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

//bring in mongoose connection 
require('mongoose').connect(process.env.DB_URI || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.error(err))