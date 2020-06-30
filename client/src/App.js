// bring in react
import React from 'react'
// bring in react router
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
// bring in components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Saved from './pages/Saved'
// bring in materia-ui components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'


const App = () =>{
  
  return(
    
      <Router>
        <div>
          <Navbar />
          <CssBaseline />
          <Container maxWidth="sm">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/saved">
                <Saved />
              </Route>
            </Switch>
        </Container>
        </div>
      </Router>

  )
}

export default App