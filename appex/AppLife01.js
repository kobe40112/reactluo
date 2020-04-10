import React from 'react'
//import SelectBox from './components/SelectBox'
//import Clock from './components/Clock'
import LifeCycleFunc from './components/LifeCycleFunc'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <LifeCycleFunc />
      </>
    )
  }
}

export default App