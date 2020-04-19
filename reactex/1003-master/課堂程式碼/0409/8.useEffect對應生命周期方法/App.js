import React from 'react'
//import SelectBox from './components/SelectBox'
//import Clock from './components/Clock'
import LifeCycleFunc from './components/LifeCycleFunc'

class App extends React.Component {
  constructor() {
    super()
    this.state = { isShow: true }
  }

  render() {
    return (
      <>
        {this.state.isShow ? <LifeCycleFunc /> : <h1>沒子元件</h1>}
        <button
          onClick={() => {
            this.setState({ isShow: false })
          }}
        >
          刪除
        </button>
        <button
          onClick={() => {
            this.setState({ isShow: true })
          }}
        >
          呈現
        </button>
      </>
    )
  }
}

export default App
