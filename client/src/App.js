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


const App = () =>{
  
  return(
    
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/saved'>
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>

  )
}

export default App