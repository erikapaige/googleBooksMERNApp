// bring in react and useState hook
import React, { useState } from 'react'
// bring in axios
import axios from 'axios'
// bring in components from material-ui
import { fade, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form:{
    margin: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Home = () => {
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
  bookState.handleSearchBook = event =>{
    event.preventDefault()

    axios.get(`/api/gbooks/${bookState.search}`)
      .then(({data}) =>{
        console.log(data)
        setBookState({...bookState, books: data.items })
      })
      .catch(err => console.error(err))
  }
  // see books rendered below
  return (
    <>
      <form className={classes.form} onSubmit={bookState.handleSearchBook}>
        <TextField 
          label="Search Books" 
          name="search"
          value={bookState.search}
          onChange={bookState.handleInputChange} />
          <Button 
            variant="outlined" color="primary"
            onClick={bookState.handleSearchBook}>
              <SearchIcon />
          </Button>
      </form>
      <div>
        {
          bookState.books.map(book =>(
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="book cover"
                height="140"
                image={book.volumeInfo.imageLinks.thumbnail}
                // <img src={book.volumeInfo.imageLinks.thumbnail} />
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {book.volumeInfo.title}
              </Typography>
              <Typography gutterBottom variant="h2" component="h2">
                {book.volumeInfo.authors}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {book.volumeInfo.description}
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                `View More Info${book.volumeInfo.infoLink}`
              </Button>
              <Button size="small" color="primary">
                Save
              </Button>
            </CardActions>
        </Card>
        ))
        }
      </div>
    </>
  )
}

export default Home
