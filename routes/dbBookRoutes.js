// routes that manage custom book data

// custom for book data from db
const router = require('express').Router()
const { Book } = require ('../models')

// GET books (going in and grabbing saved books)
router.get('/books', (req, res) => {
  Book.find()
    //take book it finds and returns back
    .then(books => res.json(books))
    .catch(err => console.error(err))
})

// POST adding to saved books
router.post('/books', (req, res) => {
  // going to create with req body (input)
  Book.create(req.body)
    // take book that was created and return back
    .then(book => res.json(book))
    .catch(err => console.error(err))
})

// DELETE removing books
router.delete('/books/:id', (req, res) => {
  //
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// export out the routes
module.exports = router