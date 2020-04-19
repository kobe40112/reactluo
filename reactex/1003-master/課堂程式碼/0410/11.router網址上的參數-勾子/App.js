import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 每個頁面的元件要匯入
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

// 匯入選單-每頁都有的
import Menu from './components/Menu'
// 匯入頁尾-每頁都有的
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <>
        <Menu />

        <div className="container">
          <Switch>
            {/* react-router v5之後的寫法 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        {/* 頁尾 */}
        <Footer />
      </>
    </Router>
  )
}

export default App
