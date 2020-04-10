import React from 'react'
//import SelectBox from './components/SelectBox'
//import Clock from './components/Clock'
//import LifeCycleFunc from './components/LifeCycleFunc'
import JqueryComClass from './components/JqueryComClass'
import JqueryComFunc from './components/JqueryComFunc'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <JqueryComClass />
        <JqueryComFunc />
      </>
    )
  }
}

export default App