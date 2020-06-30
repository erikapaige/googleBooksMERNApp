// bring in react and useState component
import React, { useState, useEffect } from 'react'
// bring in axios
import axios from 'axios'
// bring in components from material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

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
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

const Saved = () => {

  // setting styles for material-ui components
  const classes = useStyles()

  const [bookState, setBookState] =  useState({
    books: []
  })

  // function on page load to get saved books
  useEffect(() => {
    axios.get('/api/books')
      .then(({ data }) => {
        setBookState({ ...bookState, books: data })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div> Hello World</div>
    // <div key={book.id} className={classes.root}>
    //   <Paper className={classes.paper}>
    //     <Grid container spacing={2}>
    //       <Grid item>
    //         <CardMedia
    //           className={classes.image}
    //           image={book.volumeInfo.imageLinks.thumbnail}
    //           alt="book cover" />
    //       </Grid>
    //       <Grid item xs={12} sm container>
    //         <Grid item xs container direction="column" spacing={2}>
    //           <Grid item xs>
    //             <Typography gutterBottom variant="h5">
    //               {book.volumeInfo.title}
    //             </Typography>
    //             <Typography gutterBottom variant="h6">
    //               {book.volumeInfo.authors}
    //             </Typography>
    //             <Typography variant="body2" gutterBottom>
    //               {book.volumeInfo.description}
    //             </Typography>
    //             <Typography variant="body2" color="textSecondary">
    //               {book.link}
    //             </Typography>
    //           </Grid>
    //           <Grid item>
    //             <CardActions>
    //               <Button
    //                 size="small"
    //                 color="primary"
    //                 href={book.volumeInfo.infoLink}>
    //                 View More Info
    //               </Button>
    //               <Button
    //                 size="small"
    //                 color="primary"
    //                 onClick={() => bookState.handleSaveBook(book)}>
    //                 Save
    //               </Button>
    //             </CardActions>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
  )
}

export default Saved
