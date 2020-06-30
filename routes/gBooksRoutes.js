// file that manages routes for api requests
const router = require('express').Router()
const axios = require('axios')


router.get('/gbooks/:search', (req, res) =>{
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${process.env.GBOOKS_API_KEY}`)
    .then(({ data }) =>{
      res.json (data)
      // Book.find()
      //   .then(books => {
          
      //   })
    })
    .catch(err => console.log(err))
})

// export out the routes
module.exports = router