// bring in react and useState hook
import React, { useState } from 'react'
// bring in axios
import axios from 'axios'
// bring in components from material-ui
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px',
    maxWidth: 500,
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

const Home = () => {
  
  // setting styles for material-ui components
  const classes = useStyles()
  
  //search for book
  const [ bookState, setBookState ] = useState({
    search:'',
    books: []
  })

  // handling search input
  bookState.handleInputChange = event =>{
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }
  // function to search api
  bookState.handleSearchBook = event => {
    event.preventDefault()

    axios.get(`/api/gbooks/${bookState.search}`)
      .then(({ data }) =>{
        console.log(data)
        setBookState({ ...bookState, books: data })
      })
      .catch(err => console.error(err))
  }

  // function to save book
  bookState.handleSaveBook = book => {
    console.log(book)

    axios.post('/api/books', {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
      bookId: book.id,
    })
      .then(() =>{
        const books = bookState.books
        const booksFiltered = books.filter(boock => boock.id !== book.id)
        setBookState({ ...bookState, books: booksFiltered })
        console.log(books)
      })
      .catch(err => console.error(err))
  }
  // see books rendered below
  // give form same function as button
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form className={classes.form} onSubmit={bookState.handleSearchBook}>
              <TextField 
                name="search"
                value={bookState.search}
                onChange={bookState.handleInputChange} />
              <Button 
                variant="outlined" 
                color="primary"
                onClick={bookState.handleSearchBook}>
                  <SearchIcon />
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>  
      <div>
        {
          bookState.books.map(book => (
            <div key={book.id} className={classes.root}>
             <Paper className={classes.paper}>
               <Grid container spacing={2}>
                 <Grid item>
                    <CardMedia> 
                    <img 
                      className={classes.image}
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="book cover" />
                    </CardMedia>
                 </Grid>
                 <Grid item xs={12} sm container>
                   <Grid item xs container direction="column" spacing={2}>
                     <Grid item xs>
                       <Typography gutterBottom variant="h5">
                          {book.volumeInfo.title}
                       </Typography>
                       <Typography gutterBottom variant="h6">
                          {book.volumeInfo.authors}
                       </Typography>
                       <Typography variant="body2" gutterBottom>
                          {book.volumeInfo.description}
                       </Typography>
                       <Typography variant="body2" color="textSecondary">
                          {book.link}
                       </Typography>
                     </Grid>
                     <Grid item>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          href={book.volumeInfo.infoLink}>
                            View More Info
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => bookState.handleSaveBook(book)}>
                            Save
                        </Button>
                      </CardActions>
                     </Grid>
                   </Grid>
                 </Grid>
               </Grid>
             </Paper>
           </div>
        ))
        }
      </div>
    </>
  )
}

export default Home
