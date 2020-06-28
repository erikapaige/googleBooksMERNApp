// bring in model and Schema from mongoose
const { model, Schema } = require('mongoose')

// create schema for database 
const BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
})

// export out the Book model
module.exports = model('Book', BookSchema)