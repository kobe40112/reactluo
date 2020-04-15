import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

import Menu from './components/Menu'
import Counter from './pages/Counter'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App