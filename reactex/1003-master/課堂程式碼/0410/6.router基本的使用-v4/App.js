import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 每個頁面的元件要匯入
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
      <Router>
        <>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/product">產品</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
          </Switch>
        </>
      </Router>
  )
}

export default App
