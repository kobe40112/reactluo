import React from 'react'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="container">
          <NavBar />
          <LoginForm />
        </div>
      </>
    )
  }
}

export default App
