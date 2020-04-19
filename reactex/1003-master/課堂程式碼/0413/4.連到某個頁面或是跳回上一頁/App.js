import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFoundPage from './pages/NotFoundPage'

import Menu from './components/Menu'
import RBMenu from './components/RBMenu'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            {/* 找不到網頁，需放在swith路由表的最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
