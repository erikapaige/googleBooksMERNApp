// file that manages routes for api requests
const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')


router.get('/gbooks/:search', (req, res) =>{
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${process.env.GBOOKS_API_KEY}`)
    .then(({ data }) => {
      
      // console.log the data being returned 
      console.log(data)
      Book.find()
        .then(books => {
          const booksFiltered = data.items.filter(book => {
            let keep = true
            books.forEach(saved => {
              if (saved.bookId === book.id) {
                keep = false
              }
            })
            return keep
          })
          res.json(booksFiltered)
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

// export out the routes
module.exports = router