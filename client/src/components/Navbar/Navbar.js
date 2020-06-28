// bring in react
import React from 'react'
// bring in component from react-router
import { Link } from 'react-router-dom'
// bring in components from material-ui
// import './Navbar.css'
import {
  makeStyles, Button, Menu, MenuItem }
  from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  homeBtn: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes= useStyles()

  const[anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button className="homeBtn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        View Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to ="/">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/saved">
          Saved Books
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
