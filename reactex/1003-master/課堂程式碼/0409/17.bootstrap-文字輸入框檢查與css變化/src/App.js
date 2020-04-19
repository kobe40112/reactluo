import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'

function App() {
  const [isAuth, setIsAuth] = useState(true)

  return (
    <>
      <div className="container">
        <NavBar isAuth={isAuth} />
        <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} />
      </div>
    </>
  )
}

export default App
