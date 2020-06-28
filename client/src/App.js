// bring in react
import React from 'react'
// bring in react router
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'

const App = () =>{
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route exact path='/saved'>
            
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App