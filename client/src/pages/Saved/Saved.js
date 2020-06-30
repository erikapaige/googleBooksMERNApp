// bring in react and useState component
import React, { useState, useEffect } from 'react'
// bring in axios
import axios from 'axios'
// bring in components from material-ui
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
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
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
  }
}))

const Saved = () => {

  // setting styles for material-ui components
  const classes = useStyles()

  //set book state
  const [bookState, setBookState] =  useState({
    books: []
  })

  // function to delete
  bookState.handleDeleteBook= book =>{
    // console.log(book)
    axios.delete(`/api/books/${book._id}`)
      .then(() =>{
        const books = JSON.parse(JSON.stringify(bookState.books))
        const booksFiltered = books.filter(boock => boock._id !== book._id)
        setBookState({ ...bookState, books: booksFiltered })
      })
      .catch(err => console.error(err))
  }
  
  // function on page load to get saved books
  useEffect(() => {
    axios.get('/api/books')
      .then(({ data }) => {
        // console.log(data)
        setBookState({ ...bookState, books: data })
    
      })
      .catch(err => console.error(err))
  })

  return (
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
                      src={book.image}
                      alt="book cover" />
                  </CardMedia>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h5">
                        {book.title}
                      </Typography>
                      <Typography gutterBottom variant="h6">
                        {book.authors}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {book.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          href={book.link}>
                          View More Info
                        </Button>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => bookState.handleDeleteBook(book)}>
                          Delete
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
    
  )
}

export default Saved
