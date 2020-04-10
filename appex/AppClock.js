import React from 'react'
//import SelectBox from './components/SelectBox'
import Clock from './components/Clock'
import ClockFunc from './components/ClockFunc'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <Clock />
        <ClockFunc />
      </>
    )
  }
}

export default App