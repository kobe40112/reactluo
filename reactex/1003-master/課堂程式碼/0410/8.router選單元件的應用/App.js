import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 每個頁面的元件要匯入
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

// 匯入選單-每頁都有的
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <>
        <Menu />

        <Switch>
          {/* react-router v5之後的寫法 */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
